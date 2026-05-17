#!/bin/bash
# 💻 Levanta el entorno de pruebas local en segundo plano (con montaje de volúmenes en caliente).

echo -e "\033[0;32m[LOCAL] Levantando entorno de pruebas local...\033[0m"
docker compose up -d

echo -e "\033[0;32m[LOCAL] ¡Listo! Abre http://localhost:8080 en tu navegador para ver cambios en vivo.\033[0m"
