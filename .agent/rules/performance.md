# ⚡ Reglas de Rendimiento y Optimización Web

Este documento detalla las prácticas técnicas obligatorias para asegurar tiempos de carga ultra-rápidos, transiciones fluidas y una experiencia de usuario altamente interactiva y eficiente.

---

## 🚦 1. Estrategia de Carga de Recursos

1.  **Carga No Bloqueante**:
    *   Todos los archivos JavaScript propios y de librerías externas enlazados en el `<head>` del HTML deben incluir la directiva **`defer`** (o cargarse al final de la etiqueta `</body>`). Esto garantiza que el analizador del navegador pueda parsear el árbol DOM sin detenerse a descargar scripts.
2.  **Pre-conexiones de Fuentes**:
    *   Optimizar la carga de fuentes de Google Fonts incluyendo las etiquetas de preconexión (`dns-prefetch` y `preconnect`) en la cabecera HTML para reducir los tiempos de resolución DNS.

---

## 🎨 2. Animaciones y Renderizado Fluidos

1.  **Uso de la GPU (Aceleración por Hardware)**:
    *   Al animar transiciones de UI (hover effects, slide menus, modales), utilizar exclusivamente propiedades CSS eficientes que se procesen en la GPU, como **`transform`** (escala, rotación, traslación) y **`opacity`**.
    *   **Prohibición**: Evitar animar propiedades que causen re-flujos del navegador (Reflow) o re-pintado (Repaint), tales como `width`, `height`, `margin`, `padding`, `top`, `left`, `bottom` o `right`.
2.  **Transiciones Suaves**:
    *   Configurar transiciones CSS usando curvas de velocidad eficientes (como `cubic-bezier` o `ease-out`) y tiempos de duración razonables (entre 150ms y 450ms) para una interacción orgánica.

---

## 🖼️ 3. Optimización de Imágenes y Prevención de CLS

1.  **Formatos Modernos**:
    *   Preferir imágenes vectoriales (SVG) para iconos e ilustraciones técnicas debido a su peso ligero e impecable escalabilidad.
    *   Para fotografías o ilustraciones rasterizadas, preferir el formato de compresión moderno **WebP** antes que PNG o JPG tradicionales.
2.  **Prevención de Cumulative Layout Shift (CLS)**:
    *   Al declarar etiquetas `<img>`, es obligatorio definir siempre sus atributos de dimensiones físicas `width` y `height` o configurar áreas de reserva de espacio mediante CSS, evitando así saltos bruscos en el diseño durante la carga de la página.
