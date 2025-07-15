# Use an official Maven + JDK image
FROM maven:3.8.5-openjdk-17-slim AS build

WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project and build it
COPY . .
RUN mvn clean package -DskipTests

# Create a new image with only the built JAR
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your app uses
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
