# Installing

This project was made for a codetest to Monest

## Installing
1) Create a docker with posgres

```shell
 docker run --name "CONTAINER_IMAGE_NAME" -e POSTGRES_PASSWORD="POSTGRES_PASSWORD" -p "CHOOSE A PORT":5432 -d postgres
```

2) Change ormconfig.json

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

3) Enter on backend directory and install modules

```shell
 yarn
```

3.1) Run migrations
```shell
 yarn typeorm migration:run
```

4) Enter on frontend directory and install modules
```shell
 yarn
```
