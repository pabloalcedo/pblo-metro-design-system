# CaseCard

Tarjeta de un producto creado: barra `stroke-band` arriba (al pasar el ratón se llena con el color de su línea), bullet, metadatos, título, resumen y **un resultado con número**.

- **El consumidor aporta**: `title` (el nombre del producto), `summary` (el problema en una frase), `meta` («2025 · Marketplace de moda»), `metric` y `metricLabel` («−22 %» / «abandono en el checkout»), `line` (`P` por defecto, `X` para experimentos) y `transfers` si conecta con otra línea del territorio Producto.
- `status` muestra un `StatusBadge` bajo el título («En servicio», «Pronto»).
- Habla del producto, no del cargo: «Pago en un toque», no «Mi etapa como PM en…». El rol, si hace falta, va en `meta`.
- El número es lo que se recuerda: siempre un resultado medible y honesto, nunca «muchos usuarios».
- Rejilla de dos o tres columnas en escritorio, una en móvil, con `space-8` entre tarjetas.
- No hagas: imágenes de fondo, sombras, tarjetas sin resultado, `transfers` hacia la línea E o N.
