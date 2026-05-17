# 💻 Pila Tecnológica (Tech Stack) Oficial del Proyecto

Este documento registra de forma definitiva las tecnologías, lenguajes y librerías autorizadas para el desarrollo de la interfaz de este proyecto.

---

## 🛠️ 1. Tecnologías del Core Frontend

1.  **HTML5 Semántico**: Maquetación estructurada utilizando etiquetas semánticas nativas (`<header>`, `<main>`, `<section>`, `<footer>`).
2.  **CSS3 Glassmorphism**: Estilos interactivos personalizados implementando desenfoque de fondo (`backdrop-filter`) y variables del sistema en `:root`.
3.  **Vanilla JavaScript ES6**: Interactividad ligera, encapsulada estrictamente dentro del evento `DOMContentLoaded` y libre de librerías de renderizado reactivo (no se permite React, Angular, Vue o Svelte).

---

## 📦 2. Recursos y CDNs de Terceros

Queda autorizada la integración exclusiva de los siguientes recursos externos seguros a través de HTTPS:

*   **Framework CSS**: Bootstrap 5.3.2 (Únicamente estilos base y rejilla responsiva a través de CDN).
*   **Iconografía**: Font Awesome 6.4.0 (A través de CDN de cdnjs).
*   **Fuentes del Sistema**: Google Fonts CDN
    *   Títulos: `Outfit` (pesos 300, 400, 600, 800).
    *   Cuerpo de texto: `Space Grotesk` (pesos 400, 500, 700).

---

## 📐 3. Limitaciones Técnicas y Portabilidad

1.  **Cero Compilación Local**: El proyecto no debe depender de Node.js en tiempo de ejecución de producción. Debe poder abrirse con doble clic directamente en el archivo `index.html` en cualquier computadora local sin requerir un servidor de desarrollo.
2.  **Aceleración de GPU Obligatoria**: Toda animación interactiva (como las transiciones de las diapositivas o los hovers del explorador) debe realizarse a través de propiedades optimizadas en CSS (`transform`, `opacity`) para garantizar 60 FPS estables.
