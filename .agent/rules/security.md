# 🛡️ Reglas de Seguridad en Entorno Web Estático

Este documento establece las directrices de seguridad que deben seguirse estrictamente en el desarrollo de la interfaz de usuario y lógica del cliente para evitar vulnerabilidades de inyección y de ejecución.

---

## 🔒 1. Manipulación Segura del DOM (Prevención de XSS)

1.  **Prohibición de `innerHTML` no sanitizado**:
    *   Queda estrictamente prohibido utilizar `element.innerHTML` para insertar datos dinámicos suministrados por usuarios o fuentes externas no controladas.
    *   **Acción recomendada**: Usar siempre `element.textContent` o `element.innerText` para escapar de forma nativa los caracteres especiales HTML.
    *   Si es estrictamente necesario inyectar marcado HTML estructurado, se debe realizar a través de la creación nativa de nodos (`document.createElement`) y la asignación manual de propiedades, o pasar los datos por una biblioteca de sanitización probada antes de la inyección.

---

## 🚫 2. Evitar la Ejecución de Código Dinámico

1.  **Prohibición de `eval()`**:
    *   Bajo ninguna circunstancia se debe emplear la función `eval()` o constructores de funciones dinámicas (`new Function()`). Estas funciones abren vectores críticos para la inyección de scripts maliciosos.
2.  **Temporizadores Seguros**:
    *   Al utilizar `setTimeout` o `setInterval`, pasar siempre una referencia de función o una función anónima en lugar de cadenas de texto (ej. usar `setTimeout(() => {}, 1000)` y **nunca** `setTimeout("codigo()", 1000)`).

---

## 🌐 3. Integración Segura de Recursos Externos (CDNs)

1.  **Conexiones Cifradas**:
    *   Todo enlace de recursos externos en los archivos HTML (estilos CSS, scripts, fuentes) debe realizarse estrictamente mediante el protocolo cifrado **HTTPS**.
    *   Utilizar proveedores de CDN con alta reputación y estabilidad (ej. *cdnjs.cloudflare.com*, *jsdelivr.net*, *google fonts*).
2.  **Atributo defer/async en Scripts**:
    *   Asegurar que los scripts de terceros cuenten con carga asíncrona para no interferir en el ciclo de vida de la página de forma inesperada.
