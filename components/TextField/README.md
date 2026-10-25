# TextField

Campo de texto cuadrado, 48px, borde `stroke-rule` en `rule` sobre `paper-raised`, etiqueta visible siempre encima.

- **El consumidor aporta**: `label`, `type`, `placeholder` opcional, `help` o `error`.
- El error cambia el borde y el texto de ayuda a `alert` y lo pone en negrita: el mensaje dice qué hacer («Revisa el correo: falta la @»).
- Para la suscripción, ponlo junto a un `Button` primario dentro de `.ln-inline-form`: comparten borde y forman un solo módulo.
- No hagas: usar el placeholder como etiqueta, marcar errores solo con color.
- Para texto largo usa `TextArea`; para elegir entre pocas opciones, `ChoiceGroup`.
