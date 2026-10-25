# ChoiceGroup

Opciones únicas como módulos cuadrados de 48px: la elegida se vuelve panel de señal (`sign` con texto `on-sign`) y su punto toma el color de la línea. Sustituye a los radios y desplegables cuando hay entre dos y seis opciones.

- **El consumidor aporta**: `legend` (la pregunta: «¿De qué quieres hablar?»), `options` con `value` y `label`, `value` + `onChange` si lo controla, o `defaultValue`. `line` colorea el punto (por defecto `S`).
- Dos columnas en escritorio, una en móvil. Etiquetas cortas con verbo o sustantivo: «Crear un producto», «Algo que escribí».
- Accesible como un grupo de radios nativo: se recorre con flechas y el foco se marca en el módulo.
- No hagas: más de seis opciones, opciones de varias líneas, usarlo para selección múltiple.
