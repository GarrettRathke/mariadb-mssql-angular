FROM gradle
CMD ["gradle", "clean", "build"]
FROM amazoncorretto:17-alpine-jdk
COPY /build/libs/be-0.0.1-SNAPSHOT.jar be.jar
ENTRYPOINT ["java", "-jar","be.jar"]