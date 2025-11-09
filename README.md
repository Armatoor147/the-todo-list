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

1. Set up GitHub
2. Develop back-en

Installation:
```sh
npm init -y
npm install express body-parser mongoose dotenv cors
```

Start the Node.js server:
```sh
node app.js
```


3. Develop front-end

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


4. Containerise

Build the backend Docker image and run the backend container:
```sh
docker build -t todo-backend .
docker run -p 3001:3001 --env-file .env -d todo-backend
```

Build the frontend Docker image and run the backend container:
```sh
docker build -t todo-frontend .
docker run -p 3000:3000 -d todo-frontend
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


5. Orchestration




6. Define CI/CD
7. Write script to deploy app
8. Deploy app to cloud
9. Write documentation


## Application Utilisation

TODO!


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.