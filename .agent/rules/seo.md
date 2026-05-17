# 🔍 Reglas de SEO y Accesibilidad (a11y)

Este documento contiene las reglas de SEO técnico y accesibilidad web que garantizan que el sitio sea indexable por motores de búsqueda y accesible para todos los usuarios.

---

## 🎯 1. SEO Técnico y Estructura Semántica

1.  **Etiquetas Semánticas de HTML5**:
    *   Toda página web en este proyecto debe usar la maquetación semántica nativa para estructurar el contenido de forma clara:
        *   `<header>`: Para el Hero o barras de navegación.
        *   `<main>`: Para el cuerpo de contenido principal (solo debe haber uno por página).
        *   `<section>`: Para agrupar temáticas lógicas dentro de la página.
        *   `<footer>`: Para créditos, derechos y pie de página.
2.  **Encabezado Único `<h1>`**:
    *   Cada documento HTML debe contar con exactamente **un único encabezado `<h1>`** en el cuerpo que resuma el tema principal de la página.
    *   Mantener una estructura jerárquica limpia de encabezados (`<h1>` -> `<h2>` -> `<h3>` -> `<h4>`), evitando saltar niveles (ej. no colocar un `<h4>` directamente después de un `<h2>`).

---

## 🏷️ 2. Meta Etiquetas y Títulos

1.  **Metadatos Obligatorios**:
    *   Cada archivo HTML debe incluir en su `<head>` etiquetas descriptivas únicas y optimizadas:
        *   `<title>`: El título de la página, conciso y de alta relevancia.
        *   `<meta name="description" content="...">`: Resumen del contenido de la página para buscadores (idealmente entre 120 y 160 caracteres).

---

## ♿ 3. Accesibilidad Web (a11y)

1.  **Etiquetado Alt en Imágenes**:
    *   Toda etiqueta `<img>` debe contar obligatoriamente con el atributo `alt` que proporcione una descripción de texto equivalente para lectores de pantalla. Si la imagen es puramente decorativa, declarar el atributo vacío (`alt=""`).
2.  **Etiquetas ARIA para Interactividad**:
    *   Los botones y enlaces que solo contienen iconos (como los botones de Font Awesome `<button><i class="fa-solid fa-play"></i></button>`) deben incluir obligatoriamente el atributo **`aria-label`** para dar contexto a las tecnologías de asistencia (ej. `aria-label="Iniciar Presentación"`).
3.  **Contraste Legible**:
    *   Mantener una relación de contraste adecuada entre el color del texto y su fondo (especialmente en glassmorphism). Asegurar que los contrastes sigan el nivel AA de la norma WCAG.
