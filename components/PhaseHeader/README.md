# PhaseHeader

Cabecera de cada sección de una ficha de producto: un disco grande con el número de la fase, el aviso «Fase fija» o «Sección opcional», el título en `h1` y un resumen de una frase. Las fases fijas llevan disco de color y barra `stroke-band`; las opcionales, disco hueco y regla `stroke-rule`.

- **El consumidor aporta**: `number` («01»), `title`, `id` (el mismo que en `PhaseRoute`), `meta` («3 semanas · 12 entrevistas»), `summary` y `optional`.
- Las fases fijas se llaman siempre igual: **Discovery**, **PRD**, **Resultados**. Las opcionales, con el nombre de lo que enseñan: «Mapa conceptual», «Flujos», «Mockups», «Arquitectura»…
- No hagas: resúmenes de más de una frase, saltarse la numeración.
