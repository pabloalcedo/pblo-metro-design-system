# StationSign

La cabecera de cada página: un panel negro (`sign`) con el filete blanco a `space-3` del borde superior, el título en `on-sign` y los bullets de su línea a la derecha. Es el gesto más reconocible del sistema; úsalo una vez por página.

- **El consumidor aporta**: `title` (el nombre de la estación: «Productos», «Pago en un toque», «El último vagón»), `kicker` opcional en `meta` y `lines` con los glifos de su contenido.
- El `kicker` empieza siempre por la línea y su territorio, para que nadie confunda un producto con un texto: «Línea P · Producto · 2025», «Línea E · Escritura · Relato · 2026».
- `size="page"` en portada e índices (título `display`, bullets `lg`); compacto en la ficha de un producto o en un texto (título `h1`, bullets `md`).
- No mezcles territorios en un mismo panel: un texto de escritura nunca lleva el bullet P, ni un producto el E.
- No hagas: varios paneles por página, fondos de color en el panel, texto en mayúsculas, más de tres bullets.
