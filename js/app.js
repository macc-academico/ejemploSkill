// 🚀 Interactividad del Ecosistema .agent

// Base de Datos de los Módulos del Ecosistema .agent
const agentData = {
    templates: {
        title: "Plantillas (Templates)",
        icon: "fa-cubes",
        badge: "Garantía de Consistencia",
        description: "Contiene esqueletos reutilizables (.tpl) que los agentes usan para crear código en base al estilo del proyecto. Evita empezar desde cero, garantizando que el diseño siga patrones consistentes de HTML5, CSS Glassmorphism y JS modular.",
        structure: `├── component/
│   ├── COMPONENT.html.tpl
│   ├── COMPONENT.css.tpl
│   └── COMPONENT.js.tpl
├── skills/
│   └── SKILL.md.tpl
├── service/
│   ├── SERVICE.ts.tpl
│   └── SERVICE.test.ts.tpl
├── hooks/
│   ├── HOOK.ts.tpl
│   └── HOOK.test.ts.tpl
├── utils/
│   └── UTIL.ts.tpl
└── contexts/
    ├── CONTEXT.tsx.tpl
    └── CONTEXT.provider.tsx.tpl`,
        codeTitle: "component/COMPONENT.html.tpl",
        codeContent: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{{COMPONENT_TITLE}}</title>
    <link rel="stylesheet" href="css/{{COMPONENT_NAME}}.css">
</head>
<body>
    <div class="glass-card p-5">
        <h1 class="text-white">{{COMPONENT_TITLE}}</h1>
        <p class="text-secondary">{{COMPONENT_DESCRIPTION}}</p>
        <button id="btn-{{COMPONENT_NAME}}">Interactuar</button>
    </div>
    <script src="js/{{COMPONENT_NAME}}.js" defer></script>
</body>
</html>`
    },
    prompts: {
        title: "Prompts Predefinidos",
        icon: "fa-terminal",
        badge: "Directrices de Arquitectura",
        description: "Guías explícitas escritas en Markdown que le dictan a la IA las directrices del proyecto y el comportamiento autónomo de forma estricta. Actúan como el 'manual de operaciones' personalizado.",
        structure: `├── agent-instructions.md
├── styling-guide.md
└── git-guide.md`,
        codeTitle: "prompts/agent-instructions.md",
        codeContent: `# 🤖 Instrucciones Maestro para el Agente de IA

## 🚨 PROTOCOLO DE INTERACCIÓN (REGLA DE ORO)
* **Consentimiento Explícito**: Prohibido realizar cualquier cambio en el disco sin proponer el plan detallado y obtener un "OK" en el chat.

## 🔄 DIRECTIVA DE SINCRONIZACIÓN TOTAL (MANDATORIA)
* **Sincronización Obligatoria**: Si modificas CSS base, maquetación HTML o plantillas, debes sincronizar los cambios en:
  1. Manifiesto de la Skill (SKILL.md)
  2. Base de datos interactiva de la portada (js/app.js)

## 🎨 DISEÑO Y CONSISTENCIA
* Consultar siempre '.agent/templates/' antes de crear archivos.`
    },
    rules: {
        title: "Reglas y Restricciones",
        icon: "fa-shield-halved",
        badge: "Calidad y Seguridad",
        description: "El conjunto de restricciones inviolables en cuanto a seguridad, accesibilidad, performance, SEO y calidad de código. Establece límites de comportamiento autónomo y el protocolo obligatorio de consulta previa del agente.",
        structure: `├── code-quality.md
├── security.md
├── performance.md
└── seo.md`,
        codeTitle: "rules/code-quality.md",
        codeContent: `# 📐 Reglas de Calidad y Protocolo de Interacción

## 🚨 PROTOCOLO CRÍTICO DE INTERACCIÓN (REGLA DE ORO)

1. **Consentimiento Obligatorio**: El agente de IA **NUNCA** debe realizar modificaciones, creación o eliminación de código en los archivos del disco sin antes explicar el plan y obtener una **confirmación explícita (un "OK")** en el chat.

## 📂 Organización del Proyecto
*   **Separación Estricta**: HTML en la raíz, CSS en 'css/' y JS en 'js/'.
*   **Consistencia**: Consultar siempre '.agent/templates/' antes de escribir nuevos archivos.`
    },
    brainstorming: {
        title: "Memoria de Brainstorming",
        icon: "fa-lightbulb",
        badge: "Decisiones Técnicas",
        description: "Historial de evaluaciones de diseño y decisiones de arquitectura tomadas para el proyecto. Funciona como un diario técnico persistente que evita repetir discusiones del stack.",
        structure: `├── ui-evaluation.md
└── future-skills.md`,
        codeTitle: "brainstorming/ui-evaluation.md",
        codeContent: `# 📊 Evaluación: Vanilla JS + Bootstrap 5 vs React/Next.js

*   **Decisión**: Usar Vanilla JS + Bootstrap 5.
*   **Fundamento Técnico**:
    1. Carga instantánea al no requerir hydration JS ni DOM virtual.
    2. Cero dependencias locales (facilita la operación de la IA sin npm install).
    3. Portabilidad total abriendo index.html con doble clic en cualquier PC.`
    },
    tools: {
        title: "Herramientas de Ejecución",
        icon: "fa-wrench",
        badge: "Automatización Local",
        description: "Scripts locales de shell (.sh) o JavaScript que los agentes ejecutan directamente para validar, formatear, probar y desplegar el código. Da autonomía controlada al agente bajo las herramientas y comandos definidos por el equipo humano.",
        structure: `├── build-project.sh
├── run-tests.sh
├── lint-code.sh
├── deploy-to-staging.sh
├── check-coverage.sh
└── execute-custom-script.js`,
        codeTitle: "tools/run-tests.sh",
        codeContent: `#!/bin/bash
# 🧪 Ejecución controlada de la suite de pruebas unitarias y de cobertura

echo "Iniciando pruebas con Jest..."
npm run test -- --coverage --watchAll=false

if [ $? -eq 0 ]; then
  echo "✅ ¡Todas las pruebas han pasado exitosamente!"
  exit 0
else
  echo "❌ Se encontraron fallos en las pruebas."
  exit 1
fi`
    },
    logs: {
        title: "Bitácora de Logs",
        icon: "fa-clock-rotate-left",
        badge: "Auditoría e Historial",
        description: "Registra cada sesión de trabajo, auditorías de desarrollo, ejecuciones de compilación y errores. Esencial para depuraciones autónomas y rastreo de cambios históricos.",
        structure: `├── 2026-05-17/
│   └── agent-session-1.log
└── error.log`,
        codeTitle: "logs/2026-05-17/agent-session-1.log",
        codeContent: `[2026-05-17T15:10:00] [INFO] INICIO DE SESIÓN DE DESARROLLO AUTÓNOMO (Antigravity)
[2026-05-17T15:11:40] [INFO] MIGRACIÓN: Creando directorio unificado '.agent/skills/' y moviendo habilidad.
[2026-05-17T15:30:50] [INFO] DISEÑO: Sobrescribiendo clases '.text-secondary' y '.text-muted' en 'css/styles.css'.
[2026-05-17T15:37:27] [INFO] RULES: Creado archivo 'code-quality.md' definiendo el Protocolo de Consentimiento.
[2026-05-17T16:03:39] [INFO] PROMPTS: Redactado 'agent-instructions.md' con la Directiva de Sincronización.
[2026-05-17T16:08:55] [INFO] BRAINSTORMING: Creado reporte técnico 'ui-evaluation.md' (Vanilla JS vs React).
[2026-05-17T16:16:47] [INFO] ESTADO DE REPOSITORIO: 100% LIMPIO Y SINCRONIZADO.`
    },
    memory: {
        title: "Memoria del Proyecto",
        icon: "fa-brain",
        badge: "Base de Conocimiento",
        description: "El contexto persistente a largo plazo sobre el estado del proyecto. Almacena las decisiones de negocio y el stack de tecnología oficial, garantizando la contextualización instantánea de la IA.",
        structure: `├── project-context.md
└── tech-stack.md`,
        codeTitle: "memory/project-context.md",
        codeContent: `# 📚 Contexto de Proyecto: Presentador Interactivo

*   **Objetivo**: Crear un portal web interactivo responsivo de estética Cyberpunk y Glassmorphism para demostraciones de agentes.
*   **Pila de Tecnología**: HTML5 semántico, CSS3 personalizado y Vanilla JavaScript ES6 (sin NodeJS en producción).
*   **Directiva Crítica**: Proyección nítida de alta visibilidad (slate-100/300) y soporte de teclado para diapositivas.`
    }
};

// Lógica de Renderizado Interactiva
document.addEventListener("DOMContentLoaded", () => {
    const treeNodes = document.querySelectorAll(".tree-node");
    const moduleTitle = document.getElementById("module-title");
    const moduleIcon = document.getElementById("module-icon");
    const moduleBadge = document.getElementById("module-badge");
    const moduleDesc = document.getElementById("module-desc");
    const moduleStructure = document.getElementById("module-structure");
    const codeTitleElement = document.getElementById("code-title");
    const codeContentElement = document.getElementById("code-content");
    const dynamicPane = document.getElementById("dynamic-pane");

    // Función para actualizar los datos en el panel
    function updateModuleDetails(key) {
        const data = agentData[key];
        if (!data) return;

        // Reset animación
        dynamicPane.style.animation = "none";
        dynamicPane.offsetHeight; // Truco de reflow para reiniciar animación CSS
        dynamicPane.style.animation = "fadeIn 0.4s ease-out";

        // Actualizar contenido
        moduleTitle.textContent = data.title;
        moduleBadge.textContent = data.badge;
        moduleDesc.textContent = data.description;
        moduleStructure.textContent = data.structure;
        codeTitleElement.textContent = data.codeTitle;
        codeContentElement.textContent = data.codeContent;

        // Actualizar icono con clases correctas
        moduleIcon.className = `module-icon fa-solid ${data.icon}`;
    }

    // Escuchador de clic en cada nodo del árbol
    treeNodes.forEach(node => {
        node.addEventListener("click", () => {
            // Remover estado activo de los demás
            treeNodes.forEach(t => t.classList.remove("active-folder"));
            
            // Activar nodo seleccionado
            node.classList.add("active-folder");
            
            // Obtener llave del módulo
            const moduleKey = node.getAttribute("data-module");
            if (moduleKey) {
                updateModuleDetails(moduleKey);
            }
        });
    });

    // Cargar primer módulo de forma predeterminada (Templates)
    updateModuleDetails("templates");

    // 🎬 LÓGICA DEL MODO PRESENTACIÓN (SLIDESHOW FULLSCREEN)
    const btnStartPres = document.getElementById("btn-start-presentation");
    const btnClosePres = document.getElementById("btn-close-presentation");
    const presOverlay = document.getElementById("presentation-overlay");
    const slideCards = document.querySelectorAll(".slide-card");
    const btnPrevSlide = document.getElementById("btn-prev-slide");
    const btnNextSlide = document.getElementById("btn-next-slide");
    const slideProgress = document.getElementById("slide-progress");

    let currentSlide = 0;
    const totalSlides = slideCards.length;

    // Función para actualizar la visualización de la slide activa
    function showSlide(index) {
        // Asegurar límites circulares
        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1;
        currentSlide = index;

        // Ocultar todas las slides y quitar clase activa
        slideCards.forEach(slide => {
            slide.classList.remove("active-slide");
        });

        // Mostrar slide actual
        slideCards[currentSlide].classList.add("active-slide");

        // Actualizar barra de progreso
        slideProgress.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }

    // Iniciar Presentación
    if (btnStartPres) {
        btnStartPres.addEventListener("click", () => {
            presOverlay.classList.add("presentation-active");
            showSlide(0); // Empezar en la primera
        });
    }

    // Cerrar Presentación
    if (btnClosePres) {
        btnClosePres.addEventListener("click", () => {
            presOverlay.classList.remove("presentation-active");
        });
    }

    // Navegar Adelante
    if (btnNextSlide) {
        btnNextSlide.addEventListener("click", () => {
            showSlide(currentSlide + 1);
        });
    }

    // Navegar Atrás
    if (btnPrevSlide) {
        btnPrevSlide.addEventListener("click", () => {
            showSlide(currentSlide - 1);
        });
    }

    // Soporte para Navegación con Teclado
    document.addEventListener("keydown", (e) => {
        if (presOverlay.classList.contains("presentation-active")) {
            if (e.key === "ArrowRight") {
                showSlide(currentSlide + 1);
            } else if (e.key === "ArrowLeft") {
                showSlide(currentSlide - 1);
            } else if (e.key === "Escape") {
                presOverlay.classList.remove("presentation-active");
            }
        }
    });
});
