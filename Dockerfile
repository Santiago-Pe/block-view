# Usa una imagen base con Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /block-view

# Copia los archivos necesarios para la instalación de las dependencias
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación estará corriendo
EXPOSE 5173

# Define la variable de entorno VITE_API_KEY
ENV VITE_API_KEY=${VITE_API_KEY}

# Comando para ejecutar la aplicación
CMD ["npm"]
