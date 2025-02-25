## About

An over-engineered school project for displaying recipes from a database.

## Developing Locally

Required: [Install Docker](https://docs.docker.com/engine/install/)

Start up backend and frontend services, recreating images as needed.
The frontend is at `localhost:8080` and the backend is at `localhost:5000`.
This command should be ran whenever you start developing or whenever changes are made to the backend.

```bash
docker-compose up --force-recreate
```

Close frontend and backend services, cleaning up images.
This command should be ran once you're done developing or whenever changes are made to the dockerfiles.

```bash
docker-compose down --rmi all
```