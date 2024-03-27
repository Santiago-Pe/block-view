# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /block-view

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install


# Copy the rest of your application code to the working directory
COPY . .

# Install app dependencies
RUN npm install

# Expose a port to communicate with the React app
EXPOSE 5173

# Define the environment variable VITE_API_KEY
ENV VITE_API_KEY=${VITE_API_KEY}

# Start your React app
CMD ["npm", "run", "dev"]
