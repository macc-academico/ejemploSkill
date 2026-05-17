<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{COMPONENT_TITLE}}</title>
    
    <!-- 📦 CDNs Ecosistema Base -->
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome 6 Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Outfit & Space Grotesk -->
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
    
    <!-- 🎨 Estilos Asociados del Componente -->
    <link rel="stylesheet" href="css/{{COMPONENT_NAME}}.css">
</head>
<body>

    <!-- 🪐 Contenedor Principal -->
    <div class="container py-5">
        <header class="text-center mb-5">
            <span class="badge bg-primary bg-opacity-10 text-primary py-2 px-3 mb-2"><i class="fa-solid fa-cube me-2"></i>Componente Autónomo</span>
            <h1 class="display-4 fw-bold text-white">{{COMPONENT_TITLE}}</h1>
            <p class="lead text-secondary">{{COMPONENT_DESCRIPTION}}</p>
        </header>

        <main class="row justify-content-center">
            <div class="col-lg-8">
                <!-- 🧪 Tarjeta de Componente con Efecto de Cristal (Glassmorphic) -->
                <div class="glass-card p-5">
                    <h3 class="h4 text-white mb-3"><i class="fa-solid fa-gears me-2 text-info"></i>{{COMPONENT_TITLE}} listo</h3>
                    <p class="text-secondary">
                        Esta es la plantilla base de tu nuevo componente. Está lista para que le agregues interactividad, lógica y estilos personalizados.
                    </p>
                    
                    <!-- Inserta tu contenido aquí -->
                    <div class="my-4 p-3 border border-secondary border-opacity-25 rounded bg-dark bg-opacity-20 text-center">
                        <span class="text-muted small">[Contenido Personalizado del Componente]</span>
                    </div>

                    <div class="text-center mt-4">
                        <button id="btn-{{COMPONENT_NAME}}" class="btn btn-outline-info px-4 rounded-pill">
                            <i class="fa-solid fa-play me-2"></i>Interactuar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Bootstrap 5 Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- 🚀 Lógica Asociada del Componente -->
    <script src="js/{{COMPONENT_NAME}}.js" defer></script>
</body>
</html>
