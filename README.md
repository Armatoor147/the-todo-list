# The TODO List

## Project Description

### Overview

This app impletents the functionality of a TODO list. It is programmed through full-stack develoment (server + client). It is containerised and and deployed to the cloud.


### Tools

- Back-End: Node.js
- Front-End: Next.js
- Database: MongoDB (Atlas)
- CI/CD: GItHub Actions
- Containerisation and Orchestration: Docker + Kubernetes
- Cloud: Microsoft Azure
- Scripting (for automation): Bash


## Project Architecture

TODO!

## Project Directory Structure

TODO!


## Development Plan

### 1. Set up GitHub
### 2. Develop Backend

Installation:
```sh
npm init -y
npm install express body-parser mongoose dotenv cors
```

Start the Node.js server:
```sh
node app.js
```


### 3. Develop Frontend

Set up the React App:
```sh
# Run from src/
npx create-next-app@latest frontend --use-npm --typescript # Choose ESLint, React Compiler (Yes), Tailwind CSS (Yes), `src/` directory (No), App Router (Yes), Turbopack (Yes), customize the import alias (No)
cd frontend
```

Installation:
```sh
npm install axios
```

Start the Next.js development server:
```sh
npm run dev
```


### 4. Containerise

Build the backend Docker image and run the backend container:
```sh
docker build -t todo-backend:<version> .
docker run -p 3001:3001 --env-file .env -d todo-backend
```

Build the frontend Docker image and run the backend container:
```sh
docker build -t todo-frontend:<version> .
docker run -p 3000:3000 --env-file .env -d todo-frontend
```

Stop the Docker containers from running and delete them:
```sh
# View running containers
docker ps

# Stop the container
docker stop <CONTAINER ID> # or `docker stop <CONTAINER NAME>`

# View all containers
docker ps -a

# Delete container
docker rm <CONTAINER ID>
```


Run both containers with Dock Compose:
```sh
docker-compose up -d
```

Stop the Dock Compose:
```sh
# Stop all running containers defined in the `docker-compose.yml`
docker-compose down

# Stop container without removing them
docker-compose stop

# Restart containers
docker-compose start

# View running containers
docker ps

# View logs of the containers
docker-compose logs

# Follow logs in real-time
docker-compose logs -f

# Remove all stopped containers, networks, and volumes
docker system prune
```


### 5. Orchestration

#### Minikube (local deployment)



Install and start Minikube (if it has not been done):
```sh
brew install minikube
minikube start
```

Deploy backend:
```sh
# Build backend Docker image
docker build -t todo-backend:<version> .

# Load backend Docker image to Minikube
minikube image load todo-backend:<version>



# Go to `backend-deployment.yaml` and change `image: todo-backend:<version>` with the current version.

# Apply backend Kubernetes configuration
kubectl apply -f mongodb-secret.yaml
kubectl apply -f backend-deployment.yaml


# Return the backend URL to access server
minikube service todo-backend --url
```


Deploy frontend:
```sh
# Build frontend Docker image (Get BACKEND URL from the previous minikube service command)
docker build -t todo-frontend:<version> \
    --build-arg NEXT_PUBLIC_API_URL="<BACKEND URL>" \
    .

# Load frontend Docker image to Minikube:
minikube image load todo-frontend:<version>


# Go to `frontend-deployment.yaml` and change `image: todo-frontend:<version>` with the current version.

# Apply frontend Kubernetes configuration
kubectl apply -f frontend-deployment.yaml

# Return the frontend URL to access client
minikube service todo-frontend
```



### 6. Define CI/CD
### 7. Write script to deploy app
### 8. Deploy app to cloud
### 9. Write documentation


## Application Utilisation

1. Local Node Deployment

- Deploy app:
```sh
# Deploy the server on src/backend
node app.js

# Deploy the client on src/frontend
npm run dev
```

- Test app at `http://localhost:3000`


2. Local Docker Deployment:



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.