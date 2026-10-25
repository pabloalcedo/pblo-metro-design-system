# Prose

El cuerpo de lectura: aplica la tipografía a HTML plano (el que sale de Markdown o del editor). Columna de `measure-prose`, enlaces en `link` subrayados, viñetas cuadradas, código en `paper-raised` con mono.

- **El consumidor aporta**: el HTML del texto como hijos. Un primer párrafo con `.ln-lead` hace de entradilla.
- Dos variantes, una por territorio:
  - **Producto** (por defecto): `body` a 18/1,6; cada `h2` lleva una regla `stroke-rule` encima, porque una ficha de producto o una nota se lee por partes.
  - **Escritura** (`variant="escritura"`): 19/1,7, párrafos más juntos y `h2` sin regla; los cortes de escena son `<p class="ln-break">■ ■ ■</p>`. Un relato se lee de corrido.
- Las figuras usan `<figure>` + `<figcaption>`; imágenes con borde `hairline`, sin sombras.
- No hagas: texto justificado, columnas de más de 70 caracteres, colores de línea en el texto.
