# Codebook server

## Requirements
* [.NET 5.0](https://dotnet.microsoft.com/download/dotnet/5.0)
* [MongoDB Community Edition v5.0](https://docs.mongodb.com/manual/administration/install-community)

## Starting the development server

To start a development server at https://localhost:5000, run

```bash
dotnet run
```

NOTE : Don't forget to start the MongoDB instance.

## Swagger page

A Swagger documentation is available on https://localhost:5001/swagger

## Docker build

A Docker setup is provided which includes both the .NET server and MongoDB.

### Requirements

#### Windows / macOS

* [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### Linux

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Starting the containers

```bash
docker-compose up
```

The .NET server will be bound on port 60000, MongoDB at the default 27017.

### Rebuilding

```bash
docker-compose build
```

### Removing the containers

```bash
docker-compose down
```
