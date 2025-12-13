FROM node:22.21-trixie AS build
WORKDIR /app
COPY --exclude=deprecated --exclude=dist --exclude=node_modules . .
RUN npm ci
RUN npm run build

FROM nginx:1.29.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
