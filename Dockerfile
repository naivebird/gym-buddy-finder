FROM maven:3.9.6-amazoncorretto-21 as BUILDER
ARG VERSION=0.0.1-SNAPSHOT
WORKDIR /build/
COPY pom.xml /build/
COPY src /build/
RUN mvn clean package
COPY target/gym-buddy-finder-${VERSION}.jar target/application.jar

FROM amazoncorretto:21-alpine
WORKDIR /app/

EXPOSE 8080

COPY --from=BUILDER /build/target/application.jar /app/
CMD java -jar /app/application.jar