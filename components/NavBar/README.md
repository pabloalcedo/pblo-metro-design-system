# NavBar

Cabecera del sitio: barra `stroke-band` arriba, la marca **Pblo** a la izquierda y las secciones agrupadas por territorio: **Productos · Experimentos · Notas de producto** | **Escritura** | **Sobre mí**, separadas por una regla vertical. La sección actual se subraya con 4px del color de su línea.

- **El consumidor aporta**: `name` («Pblo», nunca el nombre completo), `items` con `label`, `href`, `line`, `group` (`producto`, `escritura`, `personal`) y `current`.
- Producto va siempre primero: es el escaparate principal.
- **En tablet y móvil (≤900px)** los enlaces se sustituyen por un selector de línea: un botón cuadrado que dice dónde estás (bullet + sección + flecha) y despliega un panel de señal negro con las secciones agrupadas por territorio, filas de 56px y «Estás aquí» en la actual. No es un menú hamburguesa: el botón siempre nombra la estación actual.
- `defaultOpen` abre el panel al cargar; solo para previews y pruebas.
- No hagas: logotipos, más de seis secciones, mezclar secciones de los dos territorios dentro de un mismo grupo.
