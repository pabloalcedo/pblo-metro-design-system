# 🚇 Pblo Metro Design System (PM Portfolio Edition)

> **Un sistema de diseño orientado a la legibilidad, claridad visual y guía cognitiva en la narrativa de productos digitales y portfolio.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Production-brightgreen)](https://pablo.es)

---

## 📌 Executive Summary & Product Vision

**Pblo Metro** es el sistema de diseño e infraestructura visual desplegado en producción para [pablo.es](https://pablo.es), la web personal de Pablo Alcedo: el escaparate de los productos que crea y el espacio donde publica sus reflexiones técnicas y literarias.

Inspirado en la **señalética de transporte de los años setenta** (paneles negros con filetes blancos, una grotesca apretada, discos de color como código, flechas y una estricta retícula modular), este sistema de diseño traslada los principios de la información pública al desarrollo web: **que nadie se pierda y que la información se procese con la mínima fricción cognitiva.**

---

## 🎯 El Problema de Producto

En la evaluación de portfolios de Product Management, los lectores (Head of Product, Senior PMs, Recruiters) suelen enfrentarse a dos extremos ineficientes:
1. **Paredes de texto inaccesibles:** Memorias de proyecto sin jerarquía clara, densas y difíciles de escanear.
2. **Layouts genéricos y ornamentales:** Interfaces estándar que no comunican personalidad ni rigor analítico.

### La Solución: Señalética UI Aplicada a Casos de Estudio
Al igual que un plano de metro permite orientarse en una ciudad desconocida sin background previo, los componentes de este sistema permiten ubicar al lector en el estado exacto del producto (Discovery, PRD, Delivery, Iteración) de un vistazo, priorizando la claridad por encima de la decoración.

---

## ⚙️ Principios de Diseño y Producto

1. **Orientar antes que decorar:** Cada elemento visual responde a una pregunta del visitante (*dónde estoy, qué es esto, a dónde voy*). Si un elemento no orienta, sobra.
2. **Una sola fuente de verdad:** `Tipo de contenido = línea = color = glifo`, manteniendo siempre la misma combinación en toda la web.
3. **Cuadrado y modular:** Todo panel, botón y campo es rectangular (`radius-none`) y responde a múltiplos del módulo `space-12` (48px). Lo único redondo son los `bullets` y las estaciones (`radius-bullet`).
4. **El color es escaso y significa algo:** La web actúa como papel y tinta. El color aparece exclusivamente en elementos de ruta (`bullets`, `badges`, bandas), nunca como fondo de sección ni degradados.

---

## 🗺️ Arquitectura de Territorios y Líneas

La web se divide en dos grandes territorios independientes que no se mezclan, guiando al usuario mediante códigos cromáticos estrictos:

| Territorio | Línea | Glifo / Color | Contenido y Enfoque |
| :--- | :--- | :--- | :--- |
| **Producto** | **Productos (P)** | `line-red` | Proyectos propios lanzados con usuarios reales y métricas públicas. |
| **Producto** | **Experimentos (X)** | `line-magenta` | Prototipos, ideas validándose e hipótesis de aprendizaje. |
| **Producto** | **Notas de producto (N)** | `line-yellow` | Textos breves sobre creación de software y gestión. |
| **Escritura** | **Escritura (E)** | `line-blue` | Textos personales, relatos y ensayos (sin jerga profesional). |
| **Común** | **Sobre mí (S)** | `line-green` | Bio, trayectoria profesional (`RouteTimeline`) y contacto. |
| **Común** | **Archivo (A)** | `line-grey` | Contenido antiguo o retirado. |

> 🌐 **Ver el sistema aplicado en vivo:** [pablo.es](https://pablo.es)

---

## 🧩 Core Components (Fichas de Producto)

La columna vertebral del sistema de diseño y de los casos de estudio de producto se compone de los siguientes elementos clave:

* **`StationSign`**: Cabecera principal en formato panel de estación (negro puro con filete superior, título y bullets de transbordo a la derecha).
* **`RouteTimeline` / `PhaseRoute`**: Línea de metro visual que estructura el roadmap, las fases de desarrollo (Discovery, PRD, Resultados) y los hitos clave.
* **`NetworkMap`**: Plano de red holístico que conecta visualmente los diferentes proyectos y experimentos.
* **`CaseCard` & `SpecList`**: Fichas técnicas estructuradas bajo un formato de PRD estricto (*Problema, Para quién, Objetivo/Métrica, Dentro/Fuera del alcance, Requisitos clave, Riesgos*).
* **`StatusBadge`**: Indicador de servicio en tiempo real (*En servicio, Beta, Archivado*).

---

## 🤖 AI-Assisted Product Workflow (Human + Claude)

Este sistema de diseño y su implementación en producción se han desarrollado mediante un flujo de **desarrollo asistido por IA**:
1. **Definición Iterativa de Mockups:** Conceptualización y refinamiento conjunto de las plantillas de página (desktop-first optimizado para lectura técnica y reclutamiento).
2. **Agnosticismo Técnico (`tokens.json` y `tokens.css`):** Abstracción de los valores de diseño para desacoplarlos de la implementación final en WordPress.
3. **Optimización de Legibilidad:** Uso estricto de tipografías grotescas (*Archivo*) con interletraje negativo en titulares y tipografía monoespaciada (*IBM Plex Mono*) para metadatos y horarios de andén.

---

## 🛠️ Especificaciones Técnicas y Uso

Todos los componentes están empaquetados como clases CSS con prefijo `ln-` en `components/bundle.css`, integrados directamente en [pablo.es](https://pablo.es) y compatibles con cualquier stack moderno o gestor de contenidos como **WordPress.org**.

* **Tipografías:** Google Fonts (*Archivo* y *IBM Plex Mono*).
* **Espaciado:** Escala basada en múltiplos de 4px, con un módulo base `space-12` (48px).
* **Movimiento:** Animaciones funcionales y sutiles (120ms `ease-out`) con total respeto a `prefers-reduced-motion`.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.
