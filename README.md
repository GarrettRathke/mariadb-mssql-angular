# mariadb-mssql-angular
A containerized DB migration showcase with a Spring Boot backend and an Angular frontend

## Build & Run
There are 3 images that are built and run in a single container; 
a MariaDB database, a Java Spring Boot backend, and an Angular frontend. 
To build and run, simply open a terminal and use the command, docker compose up.

## Usage
The Angular frontend is accessible at http://localhost:4200,
and the Spring Boot backend is accessible at http://localhost:8080/api/<endpoint>. 
The backend also has a Swagger UI at http://localhost:8080/swagger-ui.html for inspecting 
and testing the endpoints as well as a health check at http://localhost:8080/actuator/health.
