# PhaseRoute

El recorrido de una ficha de producto: una línea horizontal con una estación por sección. Las fases fijas (Discovery, PRD, Resultados) son estaciones rellenas; las secciones opcionales, estaciones huecas en gris. Cada estación enlaza a su sección.

- **El consumidor aporta**: `phases` con `id` (el ancla de la sección), `label`, `number` y `optional`; `line` (por defecto `P`, `X` en experimentos).
- Va justo después de la entradilla de la ficha y repite el orden exacto de las secciones.
- Siempre empieza en Discovery y termina en Resultados; las opcionales van entre PRD y Resultados.
- No hagas: más de siete estaciones, cambiar los nombres de las fases fijas.
