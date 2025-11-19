# prod.dockerfile
FROM nginx:stable-alpine

COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
