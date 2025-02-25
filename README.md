## About

An over-engineered school project for displaying recipes from a database.

## Developing Locally

[Install Docker](https://docs.docker.com/engine/install/)

Some helpful docker commands
```bash
# Whenever you start developing, initialize the frontend and backend containers
docker-compose -f compose.dev.yaml up --force-recreate

# Finished developing
docker-compose down

# Run this when Dockerfiles were changed and images need to be rebuilt
docker-compose down --rmi all
```

The frontend will be located at `localhost:8080` and the backend at `localhost:5000`.