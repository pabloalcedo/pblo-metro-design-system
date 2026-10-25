# Implementar Pblo Metro en la web de Pblo

Instrucciones para quien implemente este sistema en el repositorio (normalmente Claude Code). Lee primero `README.md`: es la guía de marca y manda sobre cualquier otra cosa de esta carpeta.

## Qué hay en esta carpeta

| Archivo | Para qué sirve | ¿Se copia tal cual a la web? |
| --- | --- | --- |
| `README.md` | Guía de marca: territorios, voz, líneas, fundamentos, plantillas de página | No: es la referencia |
| `tokens.json` | Fuente única de colores, tipografía, espaciado, radios y trazos | No: se transforma al formato del stack |
| `tokens.css` | Los mismos tokens ya compilados como variables CSS (`--paper`, `--space-12`…) | Sí, o su equivalente |
| `components/bundle.css` | Todo el CSS de los componentes, con clases `ln-*` | Sí, o portado a los componentes del stack |
| `components/bundle.js` | Implementación React de referencia (`window.PbloMetro`) | Solo si el stack es React; si no, sirve de especificación |
| `components/index.d.ts` | Props de cada componente | Referencia |
| `components/<Componente>/README.md` | Cuándo usarlo, qué recibe, qué no hacer | Referencia |
| `components/<Componente>/preview.html` | Ejemplo de uso con datos reales | Referencia (necesita el entorno de previews: no abrir suelto) |

## Reglas que no se negocian

1. **Ningún valor suelto.** Todo color, tamaño, espacio o trazo sale de un token. Si falta uno, se añade a `tokens.json` y se regenera, nunca se escribe un hex o un px a mano.
2. **Dos territorios.** Producto (líneas P, X, N) y Escritura (línea E) no se mezclan: ni en enlaces relacionados, ni en listas, ni en transbordos. Producto va siempre primero.
3. **Wording fijo.** «Productos», «Experimentos», «Notas de producto», «Escritura», «Sobre mí». Nunca «blog», «casos», «portfolio» ni «PM» como etiqueta.
4. **Marca: Pblo.** En navegación, pie y títulos de pestaña («Productos · Pblo»). Pablo Alcedo solo en firma, aviso legal y Sobre mí.
5. **Cuadrado.** `radius-none` en todo salvo bullets y estaciones.
6. **Accesibilidad.** Contrastes ya verificados (AA en ambos temas); foco visible de 3px en `focus`; los bullets decorativos llevan `aria-hidden`; el menú móvil es un botón con `aria-expanded`.

## Orden de trabajo recomendado

1. **Explorar el repo** y decir qué stack es (WordPress con tema de bloques o clásico, Astro, Next…) antes de tocar nada. Proponer el plan y esperar el visto bueno.
2. **Tokens**: integrar `tokens.css` (o mapear `tokens.json`) y las fuentes (Archivo e IBM Plex Mono desde Google Fonts; la URL está en el README).
3. **Tema oscuro**: `tokens.css` define `[data-theme="dark"]`. Añadir que siga la preferencia del sistema y permita forzarlo:
   ```css
   @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { /* mismos valores que [data-theme="dark"] */ } }
   ```
4. **Estructura común**: `NavBar` (con el selector desplegable ≤900px), `SiteFooter`, `.ln-wrap` y `.ln-section`.
5. **Componentes base**: `StationSign`, `Bullet`, `Badge`, `Button`, `DirectionLink`, `SectionHeader`.
6. **Plantillas**, en este orden: índice de Productos → texto de Escritura → Sobre mí y contacto → índice y nota de Notas de producto → ficha de producto → portada. Seguir la sección «Plantillas de página» del README.
7. **Revisión** en 375, 768 y 1440 px, en claro y en oscuro, con teclado.

## Cómo traducirlo según el stack

- **WordPress (tema de bloques)**: tokens a `theme.json` (`settings.color.palette`, `typography.fontSizes`, `spacing.spacingSizes`) manteniendo los mismos nombres; `bundle.css` como hoja del tema; los componentes como *block patterns* o bloques propios (`StationSign`, `CaseCard`, `PostRow`) y *block styles* donde baste. Tipos de contenido: Productos, Experimentos y Notas de producto como CPT o categorías del territorio Producto; Escritura aparte.
- **WordPress (tema clásico)**: `tokens.css` + `bundle.css` encolados; componentes como *template parts* con el marcado de los previews.
- **Astro / Next / otro con componentes**: un componente por carpeta, mismas props que `index.d.ts`, mismas clases `ln-*`. En React se puede partir directamente de `bundle.js`.

## Estado del diseño y cambios para la web actual

Todas las plantillas tienen ya maqueta validada en escritorio y móvil: portada, índice de Productos, ficha de producto, texto de Escritura y contacto.

La web en producción (pblo.es) se construyó con una versión anterior. Al actualizarla:

1. **Renombrado**: el sistema ahora se llama **Pblo Metro** (antes Línea). El global React es `window.PbloMetro`; las clases CSS siguen con prefijo `ln-`. Cambiar el pie a «Hecho con Pblo Metro».
2. **Componentes nuevos**: `NetworkMap` (el plano de la red de la portada), `StatusBadge` («En servicio», «Pronto»), `PhaseRoute`, `PhaseHeader` y `SpecList` (ficha de producto). `CaseCard` acepta `status`. Si la portada ya tiene su propio plano, sustituirlo por `NetworkMap` para que siga las mismas reglas.
3. **Ficha de producto**: cada producto sigue el esqueleto de la sección «Plantillas de página» del README: **Discovery**, **PRD** y **Resultados** son obligatorias en todos; entre PRD y Resultados van las secciones opcionales (mapa conceptual, flujos, mockups…). Conviene modelarlo en el CMS como campos fijos para las tres fases y un bloque repetible para las opcionales.
4. **Criterio de contenido**: Productos = proyectos propios lanzados; Experimentos = proyectos propios sin lanzar; el trabajo por cuenta ajena va en Sobre mí como trayectoria, sin datos internos.

## Contenido

Los productos, cifras y textos de los previews son de ejemplo. Antes de publicar hay que sustituirlos por los reales; ninguna cifra inventada puede llegar a producción.
