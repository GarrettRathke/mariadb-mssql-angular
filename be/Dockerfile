FROM gradle as builder
WORKDIR /app
COPY . .
RUN gradle clean build
FROM amazoncorretto:17-alpine-jdk
COPY --from=builder /app/build/libs/be-0.0.1-SNAPSHOT.jar be.jar
ENTRYPOINT ["java", "-jar","be.jar"]