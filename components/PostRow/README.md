# PostRow

Fila de una lista de textos, como un horario de andén: fecha en `meta`, bullet `sm`, título `h3` con extracto opcional y tiempo de lectura a la derecha. Filas separadas con `hairline`; la lista empieza con una regla `stroke-rule`.

- **El consumidor aporta**: `title`, `date`, `line` (`E` Escritura, `N` Notas de producto), `excerpt`, `readingTime`.
- Una lista nunca mezcla las dos líneas: los textos de Escritura y las Notas de producto viven en índices separados.
- Los productos se listan con `CaseCard`, nunca como filas.
- Envuelve las filas en `<ul class="ln-posts">`. En móvil la fila se apila: fecha, título, tiempo.
- No hagas: miniaturas, contadores de likes, fechas relativas («hace 3 días»).
