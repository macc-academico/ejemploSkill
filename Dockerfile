# Usar nginx alpine como base
FROM nginx:alpine

# Crear un usuario no privilegiado
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copiar configuraciones y contenido
COPY nginx.conf /etc/nginx/nginx.conf
COPY common_config.conf /etc/nginx/common_config.conf
COPY html/ /usr/share/nginx/html/

# Crear directorios necesarios y ajustar permisos para que appuser pueda escribir
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
    && chown -R appuser:appgroup /var/cache/nginx \
    && chown -R appuser:appgroup /etc/nginx \
    && chown -R appuser:appgroup /var/log/nginx \
    && chown -R appuser:appgroup /usr/share/nginx/html \
    && touch /var/run/nginx.pid \
    && chown appuser:appgroup /var/run/nginx.pid

# Cambiar al usuario no privilegiado
USER appuser

# Exponer el puerto unificado unprivileged 8080
EXPOSE 8080

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]