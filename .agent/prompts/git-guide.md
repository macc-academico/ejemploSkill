# 🚀 Guía de Commits y Control de Versiones Git

Este manual define el formato y los estándares de Git que deben cumplir estrictamente los commits realizados en este repositorio para asegurar un historial de versiones limpio, descriptivo y profesional.

---

## 🏷️ 1. Estándar de Conventional Commits

Los mensajes de confirmación de cambios (commits) deben estructurarse de la siguiente manera:

```text
<tipo>(<ámbito-opcional>): <descripción corta en imperativo>

[cuerpo-opcional detallando los cambios]
```

### Tipos Permitidos:
*   **`feat`**: Incorporación de una nueva funcionalidad (ej. `feat(skill): agregar modo charla interactivo`).
*   **`style`**: Cambios cosméticos que no alteran el comportamiento del código (CSS, espaciados, formateo) (ej. `style: mejorar contraste de textos en modo oscuro`).
*   **`refactor`**: Reestructuración de código existente que no añade funciones ni corrige fallos (ej. `refactor: unificar carpetas del ecosistema`).
*   **`docs`**: Modificaciones exclusivas en documentación (README, prompts, rules) (ej. `docs: crear guías de prompts de arquitectura`).
*   **`fix`**: Corrección de un fallo (ej. `fix: corregir visibilidad de iconos en pantallas pequeñas`).

---

## ⚛️ 2. Commits Atómicos y Frecuentes

1.  **Enfoque de Commit Único**: Realiza commits pequeños que contengan exactamente un cambio lógico que funcione por completo. Evita acumular múltiples tareas inconexas en un commit gigante.
2.  **Mensajes Descriptivos**: El mensaje de commit debe explicar **qué** se hizo y **por qué** en la descripción corta, evitando mensajes genéricos como "update", "fix bug" o "cambios".
