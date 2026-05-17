# 🗺️ Lluvia de Ideas: Próximas Skills para el Ecosistema

Este documento almacena los borradores y la planificación de las nuevas habilidades modulares (Skills de IA) que se podrían implementar en este repositorio para potenciar las capacidades de desarrollo del agente.

---

## 🚀 1. Habilidad: Compilador y Validador de Código Estático
*   **Propósito**: Automatizar la validación de accesibilidad (a11y) y calidad del código antes de un commit.
*   **Flujo**:
    1.  El agente ejecuta un script local que analiza los archivos HTML, CSS y JS buscando violaciones de las reglas definidas en `.agent/rules/`.
    2.  Entrega un reporte detallado con las líneas específicas a optimizar.
*   **Herramientas requeridas**: Script de NodeJS con validadores de marcado livianos.

---

## 📄 2. Habilidad: Exportador de Diapositivas a PDF
*   **Propósito**: Permitir que el usuario descargue la presentación completa en un formato PDF estático e imprimible con un solo comando.
*   **Flujo**:
    1.  El agente recibe la orden de exportar la presentación.
    2.  Ejecuta una herramienta CLI (como *Puppeteer* o *Playwright*) que levanta la página en segundo plano, activa el "Modo Presentación", y captura cada diapositiva exportándolas en un documento PDF estructurado en la carpeta raíz.
*   **Herramientas requeridas**: Script interactivo de Node.js en `tools/export-pdf.js`.

---

## 🪐 3. Habilidad: Generador Automático de Componentes Glassmorphic
*   **Propósito**: Crear maquetas funcionales completas (HTML, CSS, JS) de nuevos componentes de UI de forma ultra-rápida y consistente.
*   **Flujo**:
    1.  El usuario le pide al agente una nueva sección (ej. "Créame una tabla de precios").
    2.  La Skill lee de forma instantánea la plantilla en `.agent/templates/component/`, genera los archivos de forma limpia, enlaza el CSS y JS correspondientes e inyecta la referencia en el HTML principal de forma totalmente automatizada.
*   **Herramientas requeridas**: La plantilla base `COMPONENT.tpl` y las guías de prompts de estilo.

---

## 📈 4. Prioridad de Implementación

1.  **Prioridad Alta**: *Generador Automático de Componentes Glassmorphic* (Aumenta directamente la velocidad de iteración visual de la portada).
2.  **Prioridad Media**: *Compilador y Validador de Código Estático* (Asegura que el diseño no rompa reglas del estándar).
3.  **Prioridad Baja**: *Exportador de Diapositivas a PDF* (Útil únicamente para distribución offline de la charla).
