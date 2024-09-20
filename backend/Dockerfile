# Usar la imagen oficial de Node.js
FROM node:18

# Establecer directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install


# Copiar el resto del código
COPY . .

# Exponer el puerto 3000 para el backend
EXPOSE 5000

# Comando para iniciar la aplicación
# CMD ["node", "app.js"]
CMD ["npm", "run", "dev"]
# CMD ["npx", "nodemon", "app.js"]