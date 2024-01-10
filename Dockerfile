FROM amazoncorretto:17-alpine-jdk
VOLUME /main-app
ADD build/libs/mariadb-mssql-angular-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar","/app.jar"]