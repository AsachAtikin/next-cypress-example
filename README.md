# next-cypress-example
Example project using Cypress with Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
```

## docker-compose for nginx configuration
```
version: "3"
services:
  nginx:
    image: nginx:alpine
    volumes:
      - ${NGINX_HOST_LOG_PATH}:/var/log/nginx
      - ${NGINX_SITES_PATH}:/etc/nginx/sites-available
      - ${NGINX_SITES_PATH}:/etc/nginx/conf.d
      - ${NGINX_SSL_PATH}:/etc/nginx/ssl
    ports:
      - "${NGINX_HOST_HTTP_PORT}:80"
      - "${NGINX_HOST_HTTPS_PORT}:443"
```
### With this .env
```
NGINX_HOST_HTTP_PORT=80
NGINX_HOST_HTTPS_PORT=443
NGINX_HOST_LOG_PATH=./logs/nginx/
NGINX_SITES_PATH=./nginx/sites/
NGINX_SSL_PATH=./nginx/ssl/
```
### Nginx next-cypress-example.conf

```
server {
    listen 80;
    server_name next-cypress-example;

    index index.html index.htm;
    rewrite_log on;
    error_log notice;

    location /gateway/weather {
      set $args $args&units=Metric&appid=your_api_key_goes_here;
      proxy_set_header Host $http_host;

      proxy_pass http://api.openweathermap.org/data/2.5/forecast;
    }
}

```