FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build
FROM nginx:alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/* /usr/share/nginx/html/
RUN chown -R nginx:nginx /usr/share/nginx/html