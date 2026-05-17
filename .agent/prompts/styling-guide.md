# 🎨 Guía de Estilo Visual y Diseño Cyberpunk-Glassmorphism

Este manual define la especificación técnica de diseño y la estética premium que debe respetar cualquier elemento visual nuevo que se incorpore a la interfaz de usuario de este proyecto.

---

## 🎨 1. Sistema de Colores y Neones

Para mantener la estética coherente de modo oscuro futurista, utiliza estrictamente las siguientes variables CSS y sus equivalentes de color:

*   **Fondo del Sistema**: `#05070f` (Azul espacial ultra profundo).
*   **Fondo de Superficie**: `rgba(18, 22, 45, 0.75)` (Azul marino semitransparente).
*   **Cian Neón**: `#00f2fe` (`rgb(0, 242, 254)`). Utilizado para enlaces, llamadas a la acción primarias y bordes luminosos activos.
*   **Púrpura Neón**: `#8e2de2` (`rgb(142, 45, 226)`). Utilizado para degradados, acentos y botones secundarios.

---

## 🧪 2. Ecuación del Glassmorphism (Efecto Cristal)

Toda tarjeta o panel contenedor (`.glass-card`) debe seguir rigurosamente esta fórmula CSS para garantizar el efecto esmerilado de alta calidad:

```css
.mi-tarjeta {
    /* Fondo semitransparente saturado */
    background: rgba(18, 22, 45, 0.75);
    
    /* Filtro de desenfoque de fondo */
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    
    /* Borde fino semitransparente del 12% */
    border: 1px solid rgba(255, 255, 255, 0.12);
    
    /* Sombra profunda */
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
    
    border-radius: 16px;
}
```

---

## 👁️ 3. Reglas de Legibilidad y Tipografía

1.  **Tipografías del Sistema**:
    *   **Títulos**: `'Outfit', sans-serif` (Futurista, limpia y geométrica).
    *   **Textos**: `'Space Grotesk', sans-serif` (Altamente legible y con excelente espaciado).
2.  **Visibilidad Máxima de Textos**:
    *   El texto de lectura secundaria debe tener siempre un color claro contrastado, mínimo slate-100 (`#f1f5f9`) o slate-300 (`#cbd5e1`).
    *   **Sombra de Letra**: Para evitar que las letras se mezclen con el fondo dinámico de estrellas y neón, es obligatorio aplicar sombra de texto:
        ```css
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        ```
