# 🚇 Pblo Metro Design System (PM Portfolio Edition)

## 🇬🇧 English

### 🚇 Pblo Metro Design System (PM Portfolio Edition)

> **A design system focused on readability, visual clarity, and cognitive guidance in the storytelling of digital products and portfolios.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-In%20Production-brightgreen)](https://pablo.es)

---

## 📌 Executive Summary & Product Vision

**Pblo Metro** is the design system and visual infrastructure deployed in production for [pablo.es](https://pablo.es), Pablo Alcedo’s personal website: a showcase for the products he creates and a space where he publishes technical and literary reflections.

Inspired by **1970s public transport signage** (black panels with white rules, a condensed grotesk typeface, color-coded discs, arrows, and a strict modular grid), this design system brings public-information design principles to the web: **help people find their way and process information with as little cognitive friction as possible.**

---

## 🎯 The Product Problem

When evaluating Product Management portfolios, readers (Heads of Product, Senior PMs, and recruiters) often face two inefficient extremes:

1. **Hard-to-read walls of text:** Dense project write-ups with little hierarchy that are difficult to scan.
2. **Generic, decorative layouts:** Standard interfaces that communicate neither personality nor analytical rigor.

### The solution: signage-inspired UI for case studies

Just as a metro map helps people navigate an unfamiliar city without prior knowledge, these components show readers the current state of a product (Discovery, PRD, Delivery, Iteration) at a glance, prioritizing clarity over decoration.

---

## ⚙️ Design and Product Principles

1. **Orient before decorating:** Every visual element answers a visitor’s question (*Where am I? What is this? Where can I go next?*). If an element does not help orient the visitor, it is unnecessary.
2. **One source of truth:** `Content type = line = color = glyph`, keeping the same combination consistent across the website.
3. **Square and modular:** Every panel, button, and field is rectangular (`radius-none`) and follows multiples of the `space-12` module (48px). Only bullets and stations are round (`radius-bullet`).
4. **Color is scarce and meaningful:** The website acts as paper and ink. Color appears only in route elements (bullets, badges, bands), never as a section background or gradient.

---

## 🗺️ Territories and Lines

The website is divided into two independent territories that do not mix. Strict color coding helps visitors find their way:

| Territory | Line | Glyph / Color | Content and focus |
| :--- | :--- | :--- | :--- |
| **Product** | **Products (P)** | `line-red` | Products launched with real users and public metrics. |
| **Product** | **Experiments (X)** | `line-magenta` | Prototypes, ideas being validated, and learning hypotheses. |
| **Product** | **Product notes (N)** | `line-yellow` | Short writing about building software and product management. |
| **Writing** | **Writing (E)** | `line-blue` | Personal writing, stories, and essays (without professional jargon). |
| **Common** | **About me (S)** | `line-green` | Bio, professional background (`RouteTimeline`), and contact. |
| **Common** | **Archive (A)** | `line-grey` | Older or retired content. |

> 🌐 **See the system in action:** [pablo.es](https://pablo.es)

---

## 🧩 Core Components

The design system and its product case studies are built around these key components:

- **`StationSign`**: Main header styled as a station panel (pure black with a top rule, title, and transfer bullets on the right).
- **`RouteTimeline` / `PhaseRoute`**: A visual metro line for structuring roadmaps, development phases (Discovery, PRD, Results), and key milestones.
- **`NetworkMap`**: A holistic network map that visually connects different products and experiments.
- **`CaseCard` & `SpecList`**: Structured product briefs in a strict PRD format (*Problem, Audience, Goal/Metric, In/Out of scope, Key requirements, Risks*).
- **`StatusBadge`**: A real-time service-status indicator (*In service, Beta, Archived*).

---

## 🤖 AI-Assisted Product Workflow (Human + Claude)

This design system and its production implementation were developed through an **AI-assisted development workflow**:

1. **Iterative mockup definition:** Collaborative concept development and refinement of page templates (desktop-first, optimized for technical reading and recruiting).
2. **Technology-agnostic tokens (`tokens.json` and `tokens.css`):** Design values are abstracted from the final WordPress implementation.
3. **Readability optimization:** Strict use of the grotesk typeface *Archivo*, with tight tracking in headings, and the monospaced typeface *IBM Plex Mono* for metadata and platform times.

---

## 🛠️ Technical Specifications and Usage

All components are packaged as CSS classes prefixed with `ln-` in `components/bundle.css`, integrated directly into [pablo.es](https://pablo.es), and compatible with any modern stack or content management system such as **WordPress.org**.

- **Typefaces:** Google Fonts (*Archivo* and *IBM Plex Mono*).
- **Spacing:** A scale based on multiples of 4px, with a base `space-12` module (48px).
- **Motion:** Subtle, functional animations (120ms `ease-out`) that fully respect `prefers-reduced-motion`.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## 🇪🇸 Español

### 🚇 Pblo Metro Design System (PM Portfolio Edition)

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
