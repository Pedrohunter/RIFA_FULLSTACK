# Usar una imagen base de Node.js para crear la aplicación React
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos de configuración para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente al directorio de trabajo
COPY . .

# Ejecutar el build de la aplicación para producción
RUN npm run build

# Instalar 'serve' para servir la aplicación estática
RUN npm install -g serve

# Exponer el puerto 3000 para que se pueda acceder a la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación usando 'serve'
CMD ["npm", "start"]
# CMD ["serve", "-s", "build"]
