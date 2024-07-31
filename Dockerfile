FROM amazoncorretto:21-alpine
WORKDIR /app
EXPOSE 8080

COPY ./target/gym-buddy-finder-0.0.1-SNAPSHOT.jar /app
CMD java -jar /app/gym-buddy-finder-0.0.1-SNAPSHOT.jar