# NetworkMap

El «Plano de la red»: la portada dibuja toda la web como un plano de metro. Cada línea es una banda horizontal de su color con sus estaciones (productos, experimentos, textos); las líneas del territorio Producto quedan unidas por una barra de transbordo y Escritura aparece aparte, tras el aviso «Cambio de territorio».

- **El consumidor aporta**: `title` («Plano de la red · toca una estación»), `lines` con `line`, `label`, `territory` y `stations` (`label`, `href`, `meta` con año o fecha, `status: 'soon'` para lo que aún no existe). `legend={false}` oculta la leyenda.
- Orden fijo: Productos, Experimentos, Notas de producto, Escritura. Como mucho cinco estaciones por línea: el plano resume, el índice de cada línea lista todo.
- En móvil cada línea se vuelve vertical, con las estaciones apiladas.
- Las estaciones «Pronto» no enlazan y van en gris.
- No hagas: más de cuatro líneas, estaciones de un territorio en la línea del otro, plano sin leyenda en la portada.
