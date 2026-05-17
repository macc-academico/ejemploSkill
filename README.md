## AGENTS.md — el estándar emergente

Hay un archivo que se está volviendo convención universal: AGENTS.md (o CLAUDE.md para Claude específicamente). Cualquier agente puede leerlo si se lo pasas en el contexto.

# .agent

El directorio .agent es el repositorio central para todas las configuraciones, plantillas y materiales de referencia utilizados por los agentes de desarrollo de software.

## .agent/templates

Este directorio contiene plantillas (templates) que los agentes pueden usar al crear o modificar código. Estas plantillas garantizan la consistencia en el estilo, la estructura y las mejores prácticas del proyecto.

### Estructura del directorio de plantillas:

```
.agent/templates/
├── component/                 # Plantillas para componentes de UI/lógica
│   ├── COMPONENT.tsx.tpl      # Plantilla base para componente TypeScript/React
│   └── COMPONENT.css.tpl      # Plantilla para estilos asociados
├── service/                   # Plantillas para servicios (API calls, business logic)
│   ├── SERVICE.ts.tpl
│   └── SERVICE.test.ts.tpl    # Plantilla para casos de prueba
├── hooks/                     # Plantillas para React Hooks custom
│   ├── HOOK.ts.tpl
│   └── HOOK.test.ts.tpl
├── utils/                     # Plantillas para funciones de utilidad
│   └── UTIL.ts.tpl
├── contexts/                  # Plantillas para Context API de React
│   ├── CONTEXT.tsx.tpl
│   └── CONTEXT.provider.tsx.tpl
├── api/                       # Plantillas para endpoints de API
│   ├── api.route.ts.tpl       # Definición de ruta
│   └── api.controller.ts.tpl  # Controlador
└── .gitignore                 # Plantilla para archivos ignorados por Git

```

### Convenciones en las plantillas:

- Los nombres de archivo usan `.tpl` al final para indicar que es una plantilla.
- Se utilizan variables como `{{COMPONENT_NAME}}`, `{{INTERFACE_NAME}}`, `{{METHOD_NAME}}`, `{{URL}}`, etc., que los agentes reemplazan con valores específicos.
- Se incluye documentación inline (docstrings o comentarios JSDoc) para explicar el propósito del código.
- Se promueve la separacón de responsabilidades (ej. componente, estilos, tests separados).

### Ejemplos de uso:

- Crear un nuevo componente: usar `{{PROJECT_ROOT}}/.agent/templates/component/COMPONENT.tsx.tpl` y reemplazar las variables.
- Generar tests: usar `{{PROJECT_ROOT}}/.agent/templates/service/SERVICE.test.ts.tpl` para asegurar cobertura de pruebas.

## .agent/prompts

Este directorio contiene prompts predefinidos y directrices que ayudan a los agentes a generar código de alta calidad y consistente con la arquitectura del proyecto.

### Estructura del directorio de prompts:

```
.agent/prompts/
├── architecture-guidelines.md   # Arquitectura general del proyecto
├── style-guide.md             # Convenciones de código
├── naming-conventions.md        # Reglas de nombrado
├──component-pattern.md          # Patrón para componentes
├── service-pattern.md           # Patrón para servicios
├── test-pattern.md            # Patrón para pruebas
├── commit-message-guide.md      # Estilo para mensajes de commit
└── agent-instructions.md      # Instrucciones generales para los agentes

```

### Propósito de cada archivo:

- `architecture-guidelines.md`: Describe la estructura del proyecto, patrones arquitectónicos (ej. Clean Architecture, MVC, MVVM), flujo de datos y mejores prácticas generales.
- `style-guide.md`: Reglas de formato de código, uso de TypeScript, manejo de errores, asincronía, etc.
- `naming-conventions.md`: Convenciones de nombrado para variables, funciones, componentes, archivos, etc.
- `component-pattern.md`: Cómo estructurar componentes (hooks, props, estado, efectos secundarios).
- `service-pattern.md`: Cómo implementar servicios (interfaces, inyección de dependencias, manejo de errores).
- `test-pattern.md`: Estrategia de testing, mockeos, coverage mínimo requerido.
- `commit-message-guide.md`: Formato Conventional Commits o similar para commits.
- `agent-instructions.md`: Instrucciones generales para los agentes de IA sobre cómo interactuar, planificar tareas, pedir confirmación y gestionar archivos.

## .agent/rules

Este directorio define un conjunto de reglas y restricciones que los agentes deben seguir. Estas reglas garantizan la seguridad, performance y mantenibilidad del código generado.

### Estructura del directorio de reglas:

```
.agent/rules/
├── security.md                    # Reglas de seguridad
├── performance.md                 # Reglas de performance
├── accessibility.md               # Reglas de accesibilidad (a11y)
├── seo.md                         # Reglas de SEO (para web)
├── i18n.md                        # Reglas de internacionalización
├── testing.md                     # Reglas de testing
└── code-quality.md                # Reglas de calidad de código

```

### Ejemplos de reglas:

- `security.md`: No usar `eval()`, sanitizar inputs, prevenir inyección SQL, manejar secretos adecuadamente.
- `performance.md`: Evitar re-renders innecesarios, usar memoización, optimizar queries.
- `accessibility.md`: Atributos ARIA, contrastes de color, navegación por teclado.
- `seo.md`: Meta tags, estructura semántica, URLs amigables.
- `i18n.md`: Uso de i18next, archivos de traducción separados, no hardcodear textos.
- `testing.md`: Todo código nuevo debe tener tests, cobertura mínima del 80%.
- `code-quality.md`: Sin código duplicado, funciones puras, código DRY (Don't Repeat Yourself).

## .agent/brainstorming

Este directorio contiene archivos de brainstorming que capturan ideas, soluciones propuestas y análisis de problemas. Funcionan como una memoria colectiva para el equipo de desarrollo.

### Estructura del directorio de brainstorming:

```
.agent/brainstorming/
├── architecture-options.md          # Opciones arquitectónicas evaluadas
├── library-evaluations.md         # Evaluación de librerías/frameworks
├── api-design.md                    # Decisiones de diseño de API
├── algorithm-comparisons.md         # Comparación de algoritmos
├── ui-solutions.md                  # Soluciones de UI propuestas
└── future-ideas.md                  # Ideas para el futuro

```

### Uso:

Cuando los agentes evalúan diferentes enfoques para un problema, registran sus hallazgos aquí. Esto evita que se repitan las mismas discusiones y permite rastrear la evolución de las decisiones técnicas.

## .agent/tools

Este directorio define las herramientas que los agentes tienen disponibles para executar tareas. Puede incluir scripts locales o configuraciones para herramientas externas.

### Estructura del directorio de herramientas:

```
.agent/tools/
├── build-project.sh
├── run-tests.sh
├── lint-code.sh
├── deploy-to-staging.sh
├── check-coverage.sh
└── execute-custom-script.js

```

### Ejemplos de scripts:

- `build-project.sh`: `npm run build` o `yarn build`
- `run-tests.sh`: `npm test` o `yarn test`
- `lint-code.sh`: `npm run lint` o `yarn lint`
- `check-coverage.sh`: `npm run coverage` o `yarn coverage`

## .agent/logs

Este directorio almacena logs históricos de las interacciones de los agentes, allowing para revisar el historial de desarrollo, debugging y auditoría.

### Estructura del directorio de logs:

```
.agent/logs/
├── 2026-05-17/
│   ├── agent-session-1.log
│   ├── agent-session-2.log
│   └── debug.log
├── agent.log                      # Log general
└── error.log                      # Errores acumulados
```

## .agent/memory

Este directorio actúa como una base de conocimiento para los agentes, almacenando información persistente sobre el proyecto.

### Estructura del directorio de memoria:

```
.agent/memory/
├── project-context.md             # Contexto general del proyecto
└── tech-stack.md                  # Pila de tecnología y decisiones de desarrollo
```

## .agent/skills

Este directorio contiene módulos de habilidades procedimentales autónomas escritas en Markdown con YAML frontmatter. Le otorgan al agente "superpoderes" y flujos específicos bajo demanda, maximizando la interoperabilidad universal.

### Estructura del directorio de habilidades:

```
.agent/skills/
└── presentacion-agent/            # Skill de presentación interactiva
    └── SKILL.md                   # Manifiesto y guía de la skill
```

### Propósito de las Skills:

- **Modularidad e Interoperabilidad**: Compatibles de forma nativa con Claude Code, Cursor, GPTs y Gemini.
- **Eficiencia de Tokens (Revelación Progresiva)**: El agente solo lee el contenido de la skill cuando la tarea la activa explícitamente, evitando sobrecargar el contexto del modelo.