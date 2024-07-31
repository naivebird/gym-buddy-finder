FROM amazoncorretto:21-alpine
WORKDIR /app
EXPOSE 8080

ARG JAR_FILE=gym-buddy-finder-0.0.1-SNAPSHOT.jar

COPY ./target/${JAR_FILE} /app
CMD java -jar /app/${JAR_FILE}