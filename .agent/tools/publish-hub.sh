#!/bin/bash
# 🚀 Compila la imagen oficial linux/amd64 y la sube a Docker Hub.

echo -e "\033[0;32m[NUBE] Iniciando compilación de imagen de producción y subida a Docker Hub...\033[0m"
docker buildx build --platform linux/amd64 -t macc180794/agent-example-skill:latest --push .

if [ $? -eq 0 ]; then
    echo -e "\033[0;32m[ÉXITO] ¡Imagen publicada con éxito en Docker Hub! tag: macc180794/agent-example-skill:latest\033[0m"
else
    echo "❌ Error al compilar o publicar."
    exit 1
fi
