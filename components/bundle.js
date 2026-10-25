/* @ds-bundle: {"format":4,"namespace":"PbloMetro","components":[{"name":"StationSign"},{"name":"Bullet"},{"name":"Badge"},{"name":"StatusBadge"},{"name":"DirectionLink"},{"name":"NavBar"},{"name":"NetworkMap"},{"name":"SectionHeader"},{"name":"SiteFooter"},{"name":"Button"},{"name":"TextField"},{"name":"TextArea"},{"name":"ChoiceGroup"},{"name":"CaseCard"},{"name":"Stats"},{"name":"PhaseRoute"},{"name":"PhaseHeader"},{"name":"SpecList"},{"name":"PostRow"},{"name":"SeriesRoute"},{"name":"RouteTimeline"},{"name":"Pullquote"},{"name":"Prose"}]} */
(function () {
  var React = window.React, h = React.createElement;
  var LINES = { P: 'red', X: 'magenta', E: 'blue', N: 'yellow', S: 'green', A: 'grey' };
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function lineClass(line) { return 'ln-line-' + (LINES[line] || line || 'grey'); }
  var ROT = { right: 0, 'down-right': 45, down: 90, 'down-left': 135, left: 180, 'up-left': 225, up: 270, 'up-right': 315 };

  function Arrow(p) {
    var dir = p.direction || 'right', size = p.size || 24;
    return h('svg', { className: 'ln-arrow', 'data-dir': dir, width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' },
      h('path', { fill: 'currentColor', transform: 'rotate(' + ROT[dir] + ' 12 12)', d: 'M2 10.4h13.1L10.3 5.6l2.3-2.3L21.3 12l-8.7 8.7-2.3-2.3 4.8-4.8H2z' }));
  }

  function Bullet(p) {
    var glyph = String(p.children != null ? p.children : p.line || '');
    var a11y = p.label === '' ? { 'aria-hidden': 'true' } : { role: 'img', 'aria-label': p.label || ('Línea ' + glyph) };
    return h('span', Object.assign({ className: cx('ln-bullet', 'ln-bullet--' + (p.size || 'md'), glyph.length > 1 && 'ln-bullet--pair', lineClass(p.line || glyph)) }, a11y), glyph);
  }

  function Badge(p) {
    return h('span', { className: cx('ln-badge', 'ln-badge--' + (p.variant || 'filled'), lineClass(p.line)) }, p.children);
  }

  function DirectionLink(p) {
    var dir = p.direction || 'right';
    var end = p.align === 'end' || (p.align == null && dir === 'right');
    return h('a', { href: p.href || '#', className: cx('ln-dir', end && 'ln-dir--end') },
      h('span', { className: 'ln-dir__mod' }, h(Arrow, { direction: dir, size: 28 })),
      h('span', { className: 'ln-dir__text' },
        p.meta ? h('span', { className: 'ln-meta' }, p.meta) : null,
        h('span', { className: 'ln-dir__label' }, p.children)));
  }

  function StationSign(p) {
    var lines = p.lines || [];
    var Tag = p.as || 'h1';
    return h('header', { className: cx('ln-sign', p.size === 'page' && 'ln-sign--page') },
      h('div', null,
        p.kicker ? h('p', { className: 'ln-sign__kicker' }, p.kicker) : null,
        h(Tag, { className: 'ln-sign__title' }, p.title)),
      lines.length ? h('div', { className: 'ln-sign__bullets' }, lines.map(function (l) { return h(Bullet, { key: l, line: l, size: p.size === 'page' ? 'lg' : 'md' }, l); })) : null);
  }

  function Button(p) {
    var variant = p.variant || 'primary', rest = {};
    for (var k in p) if (k !== 'variant' && k !== 'arrow' && k !== 'children' && k !== 'href' && k !== 'className') rest[k] = p[k];
    rest.className = cx('ln-btn', 'ln-btn--' + variant, p.className);
    var kids = [h('span', { key: 'l', className: 'ln-btn__label' }, p.children)];
    if (p.arrow !== false) kids.push(h(Arrow, { key: 'a', direction: 'right', size: 20 }));
    if (p.href) { rest.href = p.href; return h('a', rest, kids); }
    return h('button', Object.assign({ type: 'button' }, rest), kids);
  }

  function TextField(p) {
    var id = p.id || ('ln-' + String(p.label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    return h('div', { className: cx('ln-field', p.error && 'ln-field--error') },
      h('label', { htmlFor: id }, p.label),
      h('input', { id: id, type: p.type || 'text', placeholder: p.placeholder, defaultValue: p.defaultValue, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': (p.error || p.help) ? id + '-help' : undefined }),
      (p.error || p.help) ? h('span', { id: id + '-help', className: 'ln-field__help' }, p.error || p.help) : null);
  }

  var GROUPS = { producto: 'Producto', escritura: 'Escritura', personal: 'Personal' };
  function NavBar(p) {
    var items = p.items || [];
    var st = React.useState(!!p.defaultOpen), open = st[0], setOpen = st[1];
    React.useEffect(function () { setOpen(!!p.defaultOpen); }, [p.defaultOpen]);
    var current = items.filter(function (it) { return it.current; })[0];
    var panelId = 'ln-nav-panel';
    var groups = [];
    items.forEach(function (it) {
      var g = it.group || '', last = groups[groups.length - 1];
      if (!last || last.key !== g) groups.push({ key: g, items: [] });
      groups[groups.length - 1].items.push(it);
    });
    return h('nav', { className: cx('ln-nav', open && 'ln-nav--open'), 'aria-label': 'Principal' },
      h('a', { className: 'ln-nav__name', href: p.homeHref || '/' }, p.name),
      h('ul', { className: 'ln-nav__links' }, items.map(function (it, i) {
        var sep = i > 0 && it.group && items[i - 1].group && it.group !== items[i - 1].group;
        return h('li', { key: it.label, className: sep ? 'ln-nav__group-start' : undefined }, h('a', { className: cx('ln-nav__link', lineClass(it.line)), href: it.href || '#', 'aria-current': it.current ? 'page' : undefined },
          it.line ? h(Bullet, { line: it.line, size: 'sm', label: '' }, it.line) : null, it.label));
      })),
      h('button', { type: 'button', className: 'ln-nav__toggle', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': panelId, onClick: function () { setOpen(!open); } },
        current && current.line ? h(Bullet, { line: current.line, size: 'sm', label: '' }, current.line) : null,
        h('span', null, current ? current.label : 'Menú'),
        h(Arrow, { direction: open ? 'up' : 'down', size: 18 })),
      h('div', { id: panelId, className: 'ln-nav__panel', hidden: !open },
        groups.map(function (g) {
          return h('div', { key: g.key || 'g', className: 'ln-nav__group' },
            g.key ? h('p', { className: 'ln-nav__group-label' }, GROUPS[g.key] || g.key) : null,
            h('ul', null, g.items.map(function (it) {
              return h('li', { key: it.label }, h('a', { className: cx('ln-nav__row', lineClass(it.line)), href: it.href || '#', 'aria-current': it.current ? 'page' : undefined, onClick: function () { setOpen(false); } },
                it.line ? h(Bullet, { line: it.line, size: 'md', label: '' }, it.line) : null,
                h('span', { className: 'ln-nav__row-label' }, it.label),
                it.current ? h('span', { className: 'ln-nav__here' }, 'Estás aquí') : null));
            })));
        })));
  }

  function CaseCard(p) {
    return h('a', { className: cx('ln-card', lineClass(p.line || 'P')), href: p.href || '#' },
      h('div', { className: 'ln-card__head' },
        h('span', { className: 'ln-bullets' }, [p.line || 'P'].concat(p.transfers || []).map(function (l) { return h(Bullet, { key: l, line: l, size: 'md' }, l); })),
        p.meta ? h('span', { className: 'ln-meta' }, p.meta) : null),
      h('h3', { className: 'ln-card__title' }, p.title),
      p.status ? h(StatusBadge, { status: p.status }) : null,
      p.summary ? h('p', { className: 'ln-card__summary' }, p.summary) : null,
      p.metric ? h('div', { className: 'ln-card__outcome' }, h('span', { className: 'ln-card__metric' }, p.metric), h('span', { className: 'ln-card__metric-label' }, p.metricLabel)) : null,
      h('span', { className: 'ln-card__cta' }, p.cta || 'Ver el producto', h(Arrow, { direction: 'right', size: 18 })));
  }

  function PostRow(p) {
    return h('a', { className: 'ln-post', href: p.href || '#' },
      h('span', { className: 'ln-meta' }, p.date),
      h(Bullet, { line: p.line || 'E', size: 'sm' }, p.line || 'E'),
      h('span', { className: 'ln-post__body' }, h('span', { className: 'ln-post__title', role: 'heading', 'aria-level': 3 }, p.title), p.excerpt ? h('p', { className: 'ln-post__excerpt' }, p.excerpt) : null),
      h('span', { className: 'ln-meta' }, p.readingTime || ''));
  }

  function RouteTimeline(p) {
    var stops = p.stops || [];
    return h('ol', { className: cx('ln-route', lineClass(p.line || 'S')) }, stops.map(function (s, i) {
      return h('li', { key: i, className: cx('ln-route__stop', s.transfer && 'ln-route__stop--transfer', i === 0 && p.current !== false && 'ln-route__stop--terminal') },
        h('span', { className: 'ln-route__dot', 'aria-hidden': 'true' }),
        h('div', null,
          h('span', { className: 'ln-meta' }, s.period),
          h('p', { className: 'ln-route__role' }, s.role),
          h('p', { className: 'ln-route__org' }, s.org),
          s.description ? h('p', { className: 'ln-route__desc' }, s.description) : null));
    }));
  }

  function Pullquote(p) {
    return h('figure', { className: 'ln-quote' },
      h('blockquote', { style: { margin: 0 } }, h('p', null, p.children)),
      p.cite ? h('footer', null, p.line ? h(Bullet, { line: p.line, size: 'sm' }, p.line) : null, h('span', { className: 'ln-meta' }, p.cite)) : null);
  }

  function Prose(p) {
    return h('div', { className: cx('ln-prose', p.variant === 'escritura' && 'ln-prose--escritura') }, p.children);
  }

  function fieldA11y(id, p) {
    return { 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': (p.error || p.help) ? id + '-help' : undefined };
  }
  function fieldId(p) { return p.id || ('ln-' + String(p.label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-')); }

  function TextArea(p) {
    var id = fieldId(p);
    return h('div', { className: cx('ln-field', 'ln-field--area', p.error && 'ln-field--error') },
      h('label', { htmlFor: id }, p.label),
      h('textarea', Object.assign({ id: id, rows: p.rows || 6, placeholder: p.placeholder, defaultValue: p.defaultValue }, fieldA11y(id, p))),
      (p.error || p.help) ? h('span', { id: id + '-help', className: 'ln-field__help' }, p.error || p.help) : null);
  }

  function ChoiceGroup(p) {
    var opts = p.options || [];
    var st = React.useState(p.defaultValue != null ? p.defaultValue : (opts[0] && opts[0].value));
    var val = p.value != null ? p.value : st[0];
    function pick(v) { if (p.value == null) st[1](v); if (p.onChange) p.onChange(v); }
    var name = p.name || 'ln-choice';
    return h('fieldset', { className: cx('ln-choice', lineClass(p.line || 'S')) },
      h('legend', { className: 'ln-choice__legend' }, p.legend),
      h('div', { className: 'ln-choice__options' }, opts.map(function (o) {
        var on = o.value === val;
        return h('label', { key: o.value, className: cx('ln-choice__option', on && 'ln-choice__option--on') },
          h('input', { type: 'radio', name: name, value: o.value, checked: on, onChange: function () { pick(o.value); } }),
          h('span', { className: 'ln-choice__dot', 'aria-hidden': 'true' }),
          h('span', null, o.label));
      })));
  }

  function SectionHeader(p) {
    var Tag = p.as || 'h2';
    return h('div', { className: 'ln-section-head' },
      h('div', { className: 'ln-section-head__title' },
        p.line ? h(Bullet, { line: p.line, size: 'md', label: '' }, p.line) : null,
        h(Tag, { className: 'ln-section-head__h', id: p.id }, p.title)),
      p.meta ? h('span', { className: 'ln-meta' }, p.meta) : null);
  }

  function Stats(p) {
    return h('dl', { className: 'ln-stats' }, (p.items || []).map(function (it, i) {
      return h('div', { key: i, className: 'ln-stat' },
        h('dt', { className: 'ln-stat__label' }, it.label),
        h('dd', { className: 'ln-stat__value' }, it.value));
    }));
  }

  function SiteFooter(p) {
    return h('footer', { className: 'ln-footer' },
      h('div', { className: 'ln-wrap ln-footer__in' },
        h('div', null,
          h('p', { className: 'ln-footer__brand' }, p.brand),
          p.tagline ? h('p', { className: 'ln-meta ln-footer__tagline' }, p.tagline) : null),
        h('nav', { className: 'ln-footer__cols', 'aria-label': 'Mapa de la web' }, (p.columns || []).map(function (c) {
          return h('div', { key: c.title, className: 'ln-footer__col' },
            h('p', { className: 'ln-meta' }, c.title),
            h('ul', null, (c.links || []).map(function (l) { return h('li', { key: l.label }, h('a', { href: l.href || '#' }, l.label)); })));
        })),
        p.legal ? h('p', { className: 'ln-meta ln-footer__legal' }, p.legal) : null));
  }

  function SeriesRoute(p) {
    return h('nav', { className: cx('ln-series', lineClass(p.line || 'E')), 'aria-label': p.title || 'Serie' },
      p.title ? h('p', { className: 'ln-meta ln-series__title' }, p.title) : null,
      h('ol', { className: 'ln-series__list' }, (p.items || []).map(function (it, i) {
        return h('li', { key: i, className: cx('ln-series__stop', it.current && 'ln-series__stop--here', it.soon && 'ln-series__stop--soon') },
          it.soon ? h('span', null, it.label) : h('a', { href: it.href || '#', 'aria-current': it.current ? 'page' : undefined }, it.label));
      })));
  }


  var STATUS = { live: 'En servicio', soon: 'Pronto', retired: 'Fuera de servicio' };
  function StatusBadge(p) {
    var st = p.status || 'live';
    return h('span', { className: cx('ln-status', 'ln-status--' + st) },
      h('span', { className: 'ln-status__dot', 'aria-hidden': 'true' }), p.children || STATUS[st]);
  }

  var TERRITORY = { producto: 'Producto', escritura: 'Escritura', personal: 'Personal' };
  function NetworkMap(p) {
    var groups = [];
    (p.lines || []).forEach(function (ln) {
      var t = ln.territory || '', last = groups[groups.length - 1];
      if (!last || last.key !== t) groups.push({ key: t, lines: [] });
      groups[groups.length - 1].lines.push(ln);
    });
    return h('div', { className: 'ln-map' },
      p.title ? h('p', { className: 'ln-meta ln-map__title' }, p.title) : null,
      groups.map(function (g, gi) {
        return h('div', { key: g.key || gi, className: cx('ln-map__territory', g.lines.length > 1 && 'ln-map__territory--transfer') },
          gi > 0 ? h('p', { className: 'ln-meta ln-map__change' }, 'Cambio de territorio · ' + (TERRITORY[g.key] || g.key)) : (g.key ? h('p', { className: 'ln-meta ln-map__change' }, 'Territorio · ' + (TERRITORY[g.key] || g.key)) : null),
          g.lines.map(function (ln) {
            return h('div', { key: ln.line, className: cx('ln-map__line', lineClass(ln.line)) },
              h('div', { className: 'ln-map__head' }, h(Bullet, { line: ln.line, size: 'md', label: '' }, ln.line), h('span', { className: 'ln-map__name' }, ln.label)),
              h('ol', { className: 'ln-map__stops' }, (ln.stations || []).map(function (st, si) {
                var soon = st.status === 'soon';
                var inner = [h('span', { key: 'd', className: 'ln-map__dot', 'aria-hidden': 'true' }),
                  h('span', { key: 'l', className: 'ln-map__label' }, st.label),
                  st.meta ? h('span', { key: 'm', className: 'ln-meta ln-map__meta' }, st.meta) : null];
                return h('li', { key: si, className: cx('ln-map__stop', soon && 'ln-map__stop--soon') },
                  soon || !st.href ? h('span', { className: 'ln-map__link' }, inner) : h('a', { className: 'ln-map__link', href: st.href }, inner));
              })));
          }));
      }),
      p.legend !== false ? h('ul', { className: 'ln-map__legend', 'aria-label': 'Leyenda' },
        h('li', null, h('span', { className: 'ln-map__dot', 'aria-hidden': 'true' }), 'En servicio'),
        h('li', { className: 'ln-map__stop--soon' }, h('span', { className: 'ln-map__dot', 'aria-hidden': 'true' }), 'Pronto')) : null);
  }

  function PhaseRoute(p) {
    return h('nav', { className: cx('ln-phases', lineClass(p.line || 'P')), 'aria-label': p.label || 'Fases del producto' },
      h('ol', null, (p.phases || []).map(function (ph, i) {
        return h('li', { key: ph.id || i, className: cx('ln-phases__stop', ph.optional && 'ln-phases__stop--optional') },
          h('a', { href: '#' + (ph.id || ''), className: 'ln-phases__link' },
            h('span', { className: 'ln-phases__dot', 'aria-hidden': 'true' }),
            h('span', { className: 'ln-meta ln-phases__num' }, ph.number || String(i + 1).padStart(2, '0')),
            h('span', { className: 'ln-phases__label' }, ph.label)));
      })));
  }

  function PhaseHeader(p) {
    var Tag = p.as || 'h2';
    return h('div', { className: cx('ln-phase-head', lineClass(p.line || 'P'), p.optional && 'ln-phase-head--optional') },
      h('span', { className: 'ln-phase-head__num', 'aria-hidden': 'true' }, p.number),
      h('div', { className: 'ln-phase-head__text' },
        h('p', { className: 'ln-meta ln-phase-head__kind' }, p.optional ? 'Sección opcional' : 'Fase fija', p.meta ? ' · ' + p.meta : ''),
        h(Tag, { className: 'ln-phase-head__h', id: p.id }, p.title),
        p.summary ? h('p', { className: 'ln-phase-head__summary' }, p.summary) : null));
  }

  function SpecList(p) {
    return h('dl', { className: 'ln-spec' }, (p.items || []).map(function (it, i) {
      var v = it.value;
      return h('div', { key: i, className: 'ln-spec__row' },
        h('dt', { className: 'ln-spec__label' }, it.label),
        h('dd', { className: 'ln-spec__value' }, Array.isArray(v) ? h('ul', null, v.map(function (x, j) { return h('li', { key: j }, x); })) : v));
    }));
  }

  window.PbloMetro = Object.assign(window.PbloMetro || {}, { StationSign: StationSign, Bullet: Bullet, Badge: Badge, DirectionLink: DirectionLink, Button: Button, TextField: TextField, NavBar: NavBar, CaseCard: CaseCard, PostRow: PostRow, RouteTimeline: RouteTimeline, Pullquote: Pullquote, Prose: Prose, Arrow: Arrow, TextArea: TextArea, ChoiceGroup: ChoiceGroup, SectionHeader: SectionHeader, Stats: Stats, SiteFooter: SiteFooter, SeriesRoute: SeriesRoute, StatusBadge: StatusBadge, NetworkMap: NetworkMap, PhaseRoute: PhaseRoute, PhaseHeader: PhaseHeader, SpecList: SpecList });
})();
