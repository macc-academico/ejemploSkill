---
name: "Presentador de Ecosistema .agent"
description: "Visualiza de forma interactiva y premium la estructura, reglas y utilidades del directorio '.agent' mediante una página web responsiva con Bootstrap, CSS personalizado y Font Awesome."
---

# 🎭 Presentador de Ecosistema .agent

Esta habilidad permite al agente diseñar, reestructurar o extender la interfaz web interactiva que representa el estándar de directorios `.agent`.

## 📋 Requisitos de la Interfaz
1. **Estructura Organizada**: HTML en la raíz, estilos CSS personalizados dentro de `css/`, y JavaScript interactivo en `js/`.
2. **Estilo Premium**: Estética moderna tipo Cyberpunk/Glassmorphism con fondo oscuro (`dark mode`), tipografía futurista (Google Fonts), bordes con gradientes luminosos y sombras de neon.
3. **Interactividad**:
    - Árbol de directorios navegable (Folder Explorer) donde al hacer clic en una carpeta se muestre su propósito y archivos asociados.
    - Tarjetas interactivas con animaciones de elevación al pasar el mouse (`hover scale`).
    - Filtros por categoría (Templates, Prompts, Rules, Tools, Brainstorming).
4. **Responsividad**: Completamente adaptativo para dispositivos móviles, tabletas y computadoras utilizando rejillas de Bootstrap 5.

## 🚀 Guía de Archivos a Crear

### index.html
*   Debe incluir los CDNs de:
    - Bootstrap 5 CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css`
    - Font Awesome 6: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
    - Google Fonts: `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@400;700&display=swap`
*   Debe enlazar a:
    - `<link rel="stylesheet" href="css/styles.css">`
    - `<script src="js/app.js" defer></script>`
*   Secciones principales:
    1. **Hero**: Encabezado futurista animado.
    2. **Estructura del Directorio**: Un panel visual interactivo de `.agent/`.
    3. **Detalles de Módulos**: Tarjetas responsivas detallando cada subcarpeta descrita en el `README.md` (Templates, Prompts, Rules, Brainstorming, Tools, Logs, Memory).
    4. **Footer**: Créditos sobre el estándar de agentes.

### css/styles.css
*   Configurar variables de color de alta calidad (HSL tailored neon colors).
*   Efecto de Glassmorphic: `backdrop-filter: blur(10px) saturate(180%)`, bordes semitransparentes.
*   Animaciones de scroll y transiciones suaves (`cubic-bezier`).

### js/app.js
*   Escuchar `DOMContentLoaded`.
*   Añadir comportamiento interactivo al árbol de carpetas (cambiar el contenido detallado a la derecha dinámicamente según la carpeta que seleccione el usuario).
*   Efecto interactivo de partículas en el fondo o efectos magnéticos al hacer clic en los botones.
