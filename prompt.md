# Error

The following error is displayed in the browser's console:

```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/plain". Strict MIME type checking is enforced for module scripts per HTML spec.
```

# nginx.conf file

```
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name localhost;

        root /usr/share/nginx/html;  # Path to your static files
        index index.html index.htm;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        location / {
            try_files $uri /index.html;  # Fallback to index.html for all unmatched paths
        }
    }
}
```

# Dockerfile

```
FROM node:22.21-trixie AS build
WORKDIR /app
COPY --exclude=deprecated --exclude=dist --exclude=node_modules . .
RUN npm ci
RUN npm run build

FROM nginx:1.29.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

# compose.yml

```
services:
  webserver:
    build: .
    image: timer-display:latest
    ports:
      - "8080:80"
```

# Additional notes

- I am using a multi-stage build
- There is no API routes to worry about, this is a very simple SPA with no persistent data or API routes used
- all routing is handled by `BrowserRouter` from `react-router`
- Vite was used to build the react application
- I'm not sure if you are using the same version of cocker that I am, my version no longer requires the version be specified in the `compose.yml` file, and the naming convention of the file if no longer suggested to be `docker-compose.yml`
  