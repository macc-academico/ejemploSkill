# 📐 Reglas de Calidad de Código y Protocolo de Interacción

Este documento define el estándar de calidad de código y las reglas de interacción obligatorias para cualquier agente de IA en este proyecto.

---

## 🚨 PROTOCOLO CRÍTICO DE INTERACCIÓN (REGLA DE ORO)

1.  **Consentimiento Obligatorio**: El agente de IA **NUNCA** debe realizar modificaciones, creación o eliminación de código en los archivos del disco sin antes explicar claramente el plan y obtener una **confirmación explícita (un "OK")** por parte del usuario en el chat.
2.  **Transparencia**: Antes de realizar cualquier acción de edición o creación de archivos, el agente debe detallar qué líneas o archivos se verán afectados y la justificación técnica detrás del cambio.

---

## 📂 Organización y Estructura del Proyecto

1.  **Separación Estricta de Responsabilidades**:
    *   **HTML**: La estructura principal debe residir en archivos `.html` limpios en la raíz del proyecto. Queda prohibido el uso de estilos inline (`style="..."`) y scripts inline (`<script>...</script>`).
    *   **CSS**: Todo el estilo visual debe ubicarse en archivos `.css` organizados dentro del directorio `css/`.
    *   **JavaScript**: Toda la lógica de comportamiento e interactividad debe ubicarse en archivos `.js` dentro del directorio `js/`.
2.  **Uso Obligatorio de Plantillas**:
    *   Antes de crear un nuevo componente o página, el agente debe consultar el directorio [.agent/templates/](file:///Users/macc/workspace/ejemploSkill/.agent/templates/) y utilizar la estructura base de `COMPONENT.html.tpl`, `COMPONENT.css.tpl` y `COMPONENT.js.tpl` para asegurar consistencia en el diseño y comportamiento.

---

## 💅 Calidad de Código CSS y JavaScript

1.  **CSS Modular y Escalable**:
    *   Definir variables de color y tipografía en el bloque `:root`.
    *   Usar nomenclatura semántica para las clases de estilo.
    *   Asegurar compatibilidad responsiva nativa o asistida por Bootstrap 5.
2.  **JavaScript Seguro y Encapsulado**:
    *   Toda la lógica de eventos y manipulación del DOM debe encapsularse bajo el evento de carga segura del DOM:
        ```javascript
        document.addEventListener('DOMContentLoaded', () => {
            // Código seguro aquí
        });
        ```
    *   Mantener el código limpio, DRY (Don't Repeat Yourself) y modularizando funciones complejas.
