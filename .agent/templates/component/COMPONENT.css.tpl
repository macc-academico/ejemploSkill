/* 🎨 Estilos Premium para {{COMPONENT_NAME}} — Glassmorphism & Cyberpunk */

:root {
    --bg-dark: #05070f;
    --bg-surface: rgba(18, 22, 45, 0.75);
    --border-color: rgba(255, 255, 255, 0.12);
    
    /* Colores Neón HSL */
    --neon-cyan: #00f2fe;
    --neon-purple: #8e2de2;
    
    /* Texto - Alta Visibilidad */
    --text-primary: #ffffff;
    --text-secondary: #f1f5f9; /* Slate-100 para lectura nítida */
    --text-muted: #cbd5e1;     /* Slate-300 para textos secundarios */
    
    /* Tipografía */
    --font-heading: 'Outfit', sans-serif;
    --font-body: 'Space Grotesk', sans-serif;
}

/* 🪐 Estilos Base de Inicialización */
body {
    background-color: var(--bg-dark);
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(142, 45, 226, 0.18) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(0, 242, 254, 0.15) 0%, transparent 40%);
    background-attachment: fixed;
    color: var(--text-primary);
    font-family: var(--font-body);
    font-size: 1.2rem;
    line-height: 1.8;
    min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: #ffffff;
}

p, li, span, code {
    /* Aseguramos máxima legibilidad en contrastes oscuros */
    text-shadow: 0 1px 3px rgba(0,0,0,0.6);
}

/* 🚀 Sobrescribir colores de Bootstrap de baja visibilidad */
.text-secondary {
    color: var(--text-secondary) !important;
}

.text-muted {
    color: var(--text-muted) !important;
}

/* 🧪 Tarjeta Glassmorphic Reutilizable */
.glass-card {
    background: var(--bg-surface);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
    overflow: hidden;
}

.glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent);
    pointer-events: none;
    z-index: 1;
}

.glass-card:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 242, 254, 0.45);
    box-shadow: 0 15px 50px 0 rgba(0, 242, 254, 0.25);
}

.glass-card p {
    color: var(--text-secondary);
    font-size: 1.25rem;
    line-height: 1.8;
}

/* 🔋 Botones con Efecto de Brillo */
.btn-outline-info {
    border-color: var(--neon-cyan);
    color: var(--neon-cyan);
    background: transparent;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
}

.btn-outline-info:hover {
    background: var(--neon-cyan);
    color: var(--bg-dark);
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
    transform: translateY(-2px);
}
