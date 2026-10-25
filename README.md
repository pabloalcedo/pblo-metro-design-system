**Pblo Metro** es el sistema de diseño de **Pblo**, la web personal de Pablo Alcedo: el escaparate de los productos que crea y, aparte, el lugar donde publica lo que escribe. Toma el lenguaje de la señalética de transporte de los años setenta —paneles negros con un filete blanco, una grotesca apretada, discos de color como código, flechas y una retícula modular— y lo usa para lo mismo que la usaba el metro: que nadie se pierda. La web es una red con dos territorios; cada tipo de contenido es una línea; cada página, una estación.

## Marca

La marca de la web es **Pblo**: así se llama en la navegación, en el pie y en el título de cada pestaña («Productos · Pblo»). El nombre completo, Pablo Alcedo, aparece solo donde hace falta una persona: la firma de un texto, el aviso legal, la página Sobre mí. Pblo se compone en Archivo 700 con interletraje −0,04em; no tiene logotipo ni símbolo.

El sistema es una interpretación propia. No usa marcas, nombres de líneas ni colores exactos de ninguna autoridad de transporte, y no debe hacerlo nunca.

## Principios

1. **Orientar antes que decorar.** Cada elemento visual responde a una pregunta del visitante: dónde estoy, qué es esto, a dónde voy. Si un elemento no orienta, sobra.
2. **Una sola fuente de verdad.** Tipo de contenido = línea = color = glifo, siempre la misma combinación en toda la web.
3. **Cuadrado y modular.** Todo panel, botón y campo es rectangular (`radius-none`) y mide múltiplos del módulo `space-12` (48px). Lo único redondo son los bullets y las estaciones (`radius-bullet`).
4. **El color es escaso y significa algo.** La página es papel y tinta; el color aparece solo en bullets, badges y bandas de ruta, nunca como fondo de sección ni como degradado.

## Dos territorios

La web tiene dos partes que no se mezclan, y el visitante tiene que saber en cuál está sin leer nada:

- **Producto**: lo que construye y lo que piensa sobre construir. Es el escaparate principal y tiene más peso: va primero en la navegación, abre la portada y ocupa más espacio. Líneas `P` Productos, `X` Experimentos y `N` Notas de producto (textos breves sobre crear producto).
- **Escritura**: lo que escribe por gusto, sin relación con el producto (relatos, textos personales). Línea `E` Escritura.
- **Sobre mí** (`S`) es común a los dos.

Qué va en cada línea del territorio Producto:

- **Productos (`P`)**: proyectos propios **lanzados**, con usuarios reales y cifras que Pablo puede publicar. Cada uno tiene su ficha completa.
- **Experimentos (`X`)**: proyectos propios **sin lanzar** o en pruebas: prototipos, ideas validándose. Cuentan qué querían averiguar; la cifra, si la hay, es de aprendizaje o tracción.
- **Notas de producto (`N`)**: textos breves sobre crear producto.
- El trabajo **por cuenta ajena** no va en Productos: va en Sobre mí, como trayectoria (`RouteTimeline`). Sin datos internos de ninguna empresa: nada de ingresos, usuarios, capturas internas ni roadmaps; si hay cifra, relativa y redondeada («en torno a un 20 %»), y solo lo que la empresa haya hecho público se puede enlazar.
- Un experimento que se lanza pasa a Productos y conserva el transbordo `X` + `P` en su tarjeta.

Reglas:
- Nombra cada territorio siempre igual: «Productos», «Experimentos» y «Notas de producto» por un lado; «Escritura» por el otro. Nunca «Notas» a secas: siempre «Notas de producto». Nunca «blog», «artículos», «casos» ni «portfolio» como etiqueta.
- No hables de cargos: «creación de producto», «creo productos». Evita «PM» y «product manager» como etiqueta de la web; si hace falta, el rol va en el `meta` de un producto.
- Los transbordos (dos bullets juntos) solo dentro del mismo territorio: P, X y N entre sí. Un texto de Escritura nunca enlaza a un producto ni a una nota de producto como «relacionado», ni al revés.
- El `kicker` de cada `StationSign` empieza por la línea y su territorio: «Línea P · Producto», «Línea E · Escritura · Relato».

## Voz y contenido

Cada territorio tiene su voz. En común: primera persona, tú al lector, caja de frase, sin emoji ni signos de exclamación.


- **Producto** (productos, experimentos y notas de producto): habla quien construyó la cosa. Frases cortas, verbo primero, resultados con número. «Reduje el abandono del checkout un 22 % en seis semanas», no «Lideré iniciativas transversales de optimización».
- **Escritura**: voz libre, literaria; sin métricas, sin jerga de producto, sin llamadas a la acción profesionales.
- **Caja de frase siempre**: títulos, botones y navegación en minúscula salvo la inicial y los nombres propios. Nunca todo en mayúsculas; la señalética original tampoco lo hacía, y así se lee más rápido.
- Sin superlativos («increíble», «revolucionario»).
- Los metadatos (fechas, tiempo de lectura, rol, año) son el horario del andén: van en `meta`, en monoespaciada, separados por « · ».
- Etiquetas de acción con verbo: «Ver el producto», «Leer el texto», «Suscribirme».

## Las líneas

Cada tipo de contenido tiene una línea con color y glifo fijos. Úsalos en `Bullet`, `Badge`, `NavBar` y en el color de `RouteTimeline`.

| Territorio | Línea | Glifo | Contenido | Relleno · texto encima |
| --- | --- | --- | --- | --- |
| Producto | Productos | P | Productos creados: el escaparate principal | `line-red` · `on-line-red` |
| Producto | Experimentos | X | Proyectos propios y prototipos | `line-magenta` · `on-line-magenta` |
| Producto | Notas de producto | N | Textos breves sobre crear producto | `line-yellow` · `on-line-yellow` |
| Escritura | Escritura | E | Textos personales: relatos, ensayos | `line-blue` · `on-line-blue` |
| Común | Sobre mí | S | Bio, trayectoria, contacto | `line-green` · `on-line-green` |
| Común | Archivo | A | Contenido antiguo o retirado | `line-grey` · `on-line-grey` |

- El texto sobre un relleno de línea es siempre su `on-line-*`: blanco en rojo, azul, verde y magenta; tinta en amarillo y gris. Nunca blanco sobre amarillo.
- Los colores de línea no son colores de texto. Para enlaces usa `link`; para errores, `alert`.
- Un contenido puede llevar un segundo bullet si conecta con otra línea de su mismo territorio (un experimento que acabó siendo producto: X + P), como un transbordo. Nunca más de tres bullets juntos.

## Fundamentos visuales

**Color.** Dos temas: *Claro · papel* (`paper` cálido, la guía impresa) y *Oscuro · andén* (`paper` carbón, panel `sign` negro puro con borde `sign-edge`). Texto principal en `ink` sobre `paper` o `paper-raised`; secundario en `ink-muted`. Los filetes finos son `hairline`; las reglas fuertes y los bordes de controles, `rule`.

**Tipografía.** Archivo, una grotesca de tradición americana, en un solo peso por rol: 700 para títulos, 600 para etiquetas, 400 para lectura. Es la heredera libre del espíritu de Akzidenz y Helvetica que usó la señalética original. Interletraje negativo en títulos (`display-xl` −0,035em hasta `h3` −0,01em), nunca en texto de lectura. IBM Plex Mono solo para `meta`. Escala de escritorio: `display-xl` 120 · `display` 72 · `h1` 48 · `h2` 32 · `h3` 22 · `lead` 21 · `body` 18 · `body-sm` 15 · `label` 14 · `meta` 13. En móvil (<640px) los títulos bajan como indica la nota de cada estilo; el texto de lectura no cambia.

Carga las fuentes desde Google Fonts:
`https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@500&display=swap`

**Espaciado y retícula.** Escala de 4px (`space-1` a `space-24`). El módulo es `space-12` (48px): alto de botones y campos, lado del cuadrado de flecha. Todo el contenido va dentro de `.ln-wrap` (`measure-page` de ancho máximo) y cada tramo de página es un `.ln-section` que abre con `SectionHeader`. La prosa nunca supera `measure-prose`.

| Punto de corte | Margen lateral | Entre secciones | Navegación | Rejillas |
| --- | --- | --- | --- | --- |
| Escritorio (>900px) | `space-16` | `space-24` | Enlaces en fila, agrupados por territorio | 3 columnas de tarjetas, texto con columna lateral |
| Tablet (641–900px) | `space-6` | `space-24` | Selector de línea desplegable | 2 columnas; la columna lateral pasa arriba |
| Móvil (≤640px) | `space-4` | `space-16` | Selector de línea desplegable | 1 columna; títulos al tamaño móvil de cada estilo |

**Reglas y bordes.** El gesto que define el sistema es la **barra superior**: `stroke-band` (8px) en `rule` sobre tarjetas, citas y cabecera, igual que la barra negra sobre cada módulo del manual de señalética. Entre filas, `stroke-hair` en `hairline`. Bordes de controles en `stroke-rule`. Sin sombras: la profundidad se marca con reglas, no con difuminados.

**Panel de señal.** `StationSign` es negro (`sign`) con un filete `on-sign` de `stroke-rule` a `space-3` del borde superior, título en `on-sign` y bullets alineados a la derecha. Úsalo una vez por página, como cabecera.

**Movimiento.** Mínimo y funcional: 120ms ease-out en hover. Las flechas se desplazan `space-1` en la dirección que señalan. Nada entra animado al hacer scroll. Respeta `prefers-reduced-motion`.

**Estados.** Hover: la barra superior de las tarjetas toma el color de su línea; los enlaces engrosan el subrayado. Foco de teclado: contorno sólido de 3px en `focus` con 2px de separación, en todo elemento interactivo. Deshabilitado: `line-grey`, nunca solo opacidad.

**Imágenes.** Capturas de producto sobre `paper-raised` con borde `stroke-hair` en `hairline`, sin sombras ni esquinas redondeadas. Pie de foto en `body-sm` y `ink-muted`. Sin fotos de stock.

## Iconografía

Solo flechas. El sistema tiene una única flecha (cuerpo grueso, punta de dos trazos a 45°) en ocho direcciones a 45°, dibujada en SVG con `currentColor` dentro de los componentes (`DirectionLink`, `Button`). Sin librerías de iconos ni emoji. Para redes sociales, texto («LinkedIn», «GitHub»), no logotipos. No hay logotipo: la marca Pblo se compone en texto (ver Marca).

## Componentes

Todos los componentes son clases CSS con prefijo `ln-` en `components/bundle.css`; el bundle React (`window.PbloMetro`) solo las aplica. El prefijo `ln-` (de «línea») se mantiene en las clases. Para implementar en cualquier stack (WordPress, Astro, Next…) basta con los tokens como variables CSS, el CSS de componentes y el marcado que muestra cada preview.

- **Señalética**: `StationSign`, `Bullet`, `Badge`, `StatusBadge`, `DirectionLink`.
- **Estructura**: `NavBar`, `NetworkMap`, `SectionHeader`, `Stats`, `SiteFooter`.
- **Acciones**: `Button`, `TextField`, `TextArea`, `ChoiceGroup`.
- **Contenido**: `CaseCard`, `PhaseRoute`, `PhaseHeader`, `SpecList`, `PostRow`, `SeriesRoute`, `RouteTimeline`, `Pullquote`, `Prose`.

## Plantillas de página

Cada página sigue el mismo recorrido: `NavBar` → `StationSign` → secciones → `DirectionLink` a la siguiente estación → `SiteFooter`. Lo que cambia es el contenido de las secciones. La portada es la única que sustituye el `StationSign` por un titular y el plano de la red.

- **Portada**: `meta` «Pablo Alcedo · Plano de la red» sobre un titular en `display-xl` («Creo productos digitales. También escribo.»); `NetworkMap` con todas las líneas; «Producto destacado» (captura a 7/12, `CaseCard` con `StatusBadge` a 5/12 y botones «Ver el producto» y el enlace a su web); «Productos y experimentos» en rejilla de `CaseCard`; banda «En GitHub» con enlace al perfil; «Escritura» con tres `PostRow` de la línea E bajo la aclaración «Textos personales. Aquí no hablo de producto.»; dos `DirectionLink`: «Todos los productos» y «Ir a Escritura».
- **Productos** (índice, territorio Producto): `StationSign` de página con P y X; entradilla con `Stats` al lado; «Producto destacado» con captura a 7/12 y `CaseCard` a 5/12; «Todos los productos» en rejilla de `CaseCard`; «Cómo creo producto»; «Notas de producto» con tres `PostRow` de la línea N. Al final, `DirectionLink` «Ir a Escritura».
- **Ficha de producto**: todas las fichas siguen el mismo esqueleto, con tres fases fijas y secciones opcionales entre ellas.
  - Cabecera: `StationSign` compacto («Línea P · Producto · 2026 · En servicio») con el nombre del producto; entradilla de una frase («Qué es y para quién»); `Stats` con tres cifras de resultado; `Button` primario al producto en vivo y secundario al código si existe.
  - `PhaseRoute` con todas las secciones en orden.
  - **01 Discovery** (fija, `PhaseHeader`): qué problema había y cómo lo comprobó. Dentro: hipótesis de partida, qué investigó (entrevistas, competencia, datos) en un `Stats` pequeño, hallazgos clave en `Prose` y el hallazgo decisivo en `Pullquote`.
  - **02 PRD** (fija): la especificación en `SpecList`, siempre con estas filas y en este orden: Problema, Para quién, Objetivo y métrica, Dentro del alcance, Fuera del alcance, Requisitos clave, Riesgos.
  - **Secciones opcionales** (`PhaseHeader optional`), según el proyecto: Mapa conceptual, Flujos, Mockups, Arquitectura, Experimentos A/B… Cada una es una figura grande sobre `paper-raised` con borde `hairline` y un pie de foto que explica qué mirar.
  - **Última: Resultados** (fija): `Stats` con las cifras finales frente al objetivo del PRD, y `Prose` con «Qué funcionó», «Qué no» y «Qué haría distinto».
  - Al final, `DirectionLink` al producto anterior y al siguiente, y «Todos los productos».
  - Los experimentos usan el mismo esqueleto con la línea `X`; si no se lanzaron, Resultados cuenta lo aprendido en lugar de cifras.
- **Notas de producto** (índice y nota): igual que Escritura en estructura, pero con la línea N, `Prose` variante Producto y, si procede, un `CaseCard` relacionado del mismo territorio.
- **Escritura** (texto): `StationSign` compacto («Línea E · Escritura · Relato»); columna lateral con la firma (Pablo Alcedo), la aclaración «Escritura: textos personales. Aquí no hablo de producto.», `SeriesRoute` si es parte de una serie y `Badge` de género; cuerpo en `Prose variant="escritura"`. Después, «Más escritura» con `PostRow` solo de la línea E y la suscripción «Un texto al mes». Al final, texto anterior y `DirectionLink` «Ir a Productos».
- **Sobre mí y contacto**: `StationSign` de página con S; formulario con `TextField`, `ChoiceGroup` (motivos que separan los territorios: «Crear un producto», «Sumarme a un equipo», «Algo que escribí», «Otra cosa»), `TextArea` y `Button` primario; columna «Otras vías» con correo, LinkedIn y GitHub como texto. Trayectoria con `RouteTimeline`.

Cambiar de territorio siempre es explícito: el `DirectionLink` final lo anuncia en su `meta` («Cambiar de territorio · Línea E») y el `SiteFooter` muestra los dos territorios por separado.
