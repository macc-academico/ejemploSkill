#!/bin/bash
# 🌐 Script Informativo de Despliegue en VPS
# (Este script es de carácter explicativo y no ejecuta comandos en tu Mac local)

echo -e "\033[0;33m[INFORMACIÓN] Este script está diseñado para ejecutarse EXCLUSIVAMENTE dentro del servidor VPS.\033[0m"
echo -e "\033[0;32mPara realizar el despliegue de producción en tu VPS, sigue estos sencillos pasos:\033[0m"
echo -e "  1. Copia únicamente el archivo 'docker-compose.prod.yml' a tu servidor VPS."
echo -e "  2. Dentro de la terminal del VPS, ejecuta los siguientes comandos:"
echo -e "     \033[0;36mdocker compose -f docker-compose.prod.yml pull\033[0m"
echo -e "     \033[0;36mdocker compose -f docker-compose.prod.yml up -d\033[0m"
echo -e "  3. ¡Listo! Tu portal web estático estará corriendo en segundo plano de forma hermética."
