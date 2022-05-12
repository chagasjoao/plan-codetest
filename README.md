# About the project

This project was made for a codetest to Monest

## Installing
1) Create a docker with posgres

```shell
 docker run --name "CONTAINER_IMAGE_NAME" -e POSTGRES_PASSWORD="POSTGRES_PASSWORD" -p "CHOOSE A PORT":5432 -d postgres
```

2) Enter on backend directory and change ormconfig.json

```shell
 "type": "postgres",
  "host": "localhost",
  "port": "YOUR_PORT",
  "username": "postgres",
  "password": "YOUR_POSSWORD",
  "database": "postgres",
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
```

2.1) Install modules

```shell
 yarn
```

2.2) Run migrations
```shell
 yarn typeorm migration:run
```

2.3) Start the server (you can change the port in src/server.ts)
```shell
 yarn dev:server
```

3) Enter on frontend directory and install modules
```shell
 yarn
```

3.1) Start the frontend server
```shell
 yarn start
```
