## About

An over-engineered school project for displaying recipes from a database.

## Developing Locally

Required: [Install Docker](https://docs.docker.com/engine/install/)

Some helpful docker commands
```bash
# Run whenever you start developing to initialize the frontend and backend containers
docker-compose up -d --force-recreate

# See the logs of a container
docker logs recipe-frontend
docker logs recipe-backend

# Run when you're done developing or changes were made to the backend
docker-compose down

# Run when dockerfiles were changed and images need to be rebuilt
docker-compose down --rmi all
```

The frontend will be located at `localhost:8080` and the backend at `localhost:5000`.