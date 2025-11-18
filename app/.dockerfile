# dev.ockerfile
FROM node:20-alpine

WORKDIR /app

# Instalamos dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copiamos el código
COPY ./app .

EXPOSE 3000

# Modo desarrollo (hot reload)
CMD ["npm", "start"]