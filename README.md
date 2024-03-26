# Documentation of the Project "Block View"

This document provides detailed instructions on how to set up and run the "Block View" project on a local machine. The project is based on a React application with Vite, which allows querying the top 10 cryptocurrencies, viewing their details, graphing prices and volumes, and linking the account with MetaMask to visualize the user's Ethereum balance.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js (preferably version 14 or higher)
- npm (Node Package Manager) or yarn
- Git (optional but recommended)

## Pasos para Configurar y Ejecutar el Proyecto

## Steps to Configure and Run the Project

1. **Clone the Repository:**

```bash
git clone <URL_of_the_repository>
cd block-view
```

2. **Install Dependencies:**
   Run the following command to install all necessary dependencies:

```bash
npm install
```

3. **Configure Environment Variables:**

```bash
    REACT_APP_API_URL=https://api.example.com
    REACT_APP_METAMASK_API_KEY=your_api_key_here
```

Replace https://api.example.com with the URL of the API you will use and your_api_key_here with your MetaMask API key.

4. **Run the Application in Development Mode**

```bash
npm run dev
```

or

```bash
yarn dev
```

# Libraries and Tools Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast development environment for modern web applications with React.
- **Redux Toolkit:** An official tool for managing state in Redux applications.
- **React Query:** A library for data fetching in React.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **Bootstrap:** A CSS framework for design and user interface.
- **Date-fns:** A collection of date and time utility functions for JavaScript.
- **React Router DOM:** A declarative router for React.
- **Recharts:** A charting library built on React and D3.
- **Redux:** A predictable state container for JavaScript applications.

# Note

To fetch cryptocurrency information, we use the CoinGecko API. It is necessary to have an account or a free demo account to obtain the API key. If you don't have an account or need more information, you can contact the developer.

# How to Run the "block-view-app" Application with Docker

1. **Download the Image from Docker Hub**:

   Use the following command to download the image from Docker Hub:

   ```bash
   docker pull santiago97/block-view-app:0.0.3
   ```

2. **Run the Application with Docker**:

   Once the image is downloaded, you can run the application with the following command:

   ```bash
   docker run -d -p 5173:5173 --name block-view-app santiago97/block-view-app:0.0.3
   ```

3. **Access the Application**:
   Once the container is up and running, you can access the application in your web browser by visiting http://localhost:5173. You should see the interface of the "block-view-app" application.

4. **Stop and Remove the Container (Optional):**:

   When you're done testing the application, you can stop and remove the container with the following commands:

   ```bash
   docker stop block-view-app
   docker rm block-view-app
   ```

# How to Run the "block-view-app" Application with Docker Compose

1. **Download the Image from Docker Hub:**:

   Use the following command to download the image from Docker Hub (optional if already downloaded):

   ```bash
   docker-compose pull
   ```

2. **Run the Application with Docker Compose:**:

   ```bash
    docker-compose up -d
   ```

3. **Run the Application with Docker Compose:**:

   Once the container is up and running, you can access the application in your web browser by visiting http://localhost:5173. You should see the interface of the "block-view-app" application.

4. **Stop and Remove the Containers (Optional):**:
   When you're done testing the application, you can stop and remove the containers with the following command:
   ```bash
   docker-compose down
   ```
   This will stop and remove the containers defined in your docker-compose.yml file.
