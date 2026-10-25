# StatusBadge

El estado de un producto, como en un panel de andén: punto verde «En servicio», punto hueco «Pronto», punto gris «Fuera de servicio». Texto en `meta`.

- **El consumidor aporta**: `status` (`live`, `soon`, `retired`); el texto es fijo salvo que pases `children`.
- Va en `CaseCard` (prop `status`), en el `StationSign` de la ficha (en el `kicker`) y junto a los enlaces externos de un producto.
- Solo para Productos y Experimentos. Nunca en Escritura.
- No hagas: inventar estados nuevos, usar el color sin texto.
