# Gym Buddy Finder (GBF)

Gym Buddy Finder (GBF) is a web application designed to connect individuals looking for gym partners, potentially leading to romantic connections while enhancing their fitness journey. The app also provides a platform for gym businesses to be featured, offering them increased visibility and the ability to reach a targeted audience.


## Installation
Prerequisites
- Java 21
- Node.js and npm
- Docker
- docker-compose

To run the web app, please follow the instructions I've included below to start both backend and frontend.
  
### Step 1: Backend Setup
#### 1.1 After running the clone command, contact the repo owner to get the `.env` file and copy it to the project directory.
```
git clone git@github.com:naivebird/gym-buddy-finder.git
```
#### 1.2 Start MySQL database, and phpMyAdmin.
```
cd gym-buddy-finder
docker-compose up mysql phpmyadmin
```
#### 1.3 Create an empty database <br />
Go to `http://localhost:8081/`<br />
Log in with the root user, credentials can be found in the .env file under the project directory.<br />
Create a database named `gbf`<br />

#### 1.4 Start backend using docker or IDE (either one)
Use Docker:
```
mvn clean package
docker-compose up --build app
```
Use IDE:<br />
Run the `GymBuddyFinderApplication` file.


### Step 2: Frontend Setup
#### 2.1 Go to the web directory
```
cd gym-buddy-finder/web
```
#### 2.2 Start the web
If you run the project for the first time:
```
npm install
```
Start the web:
```
npm start
```
### Notes
After you run the backend for the first time, you should comment this line in the application.properties file because the sample data was already initialized:
```
spring.sql.init.mode=always
```
For development purposes, when setting up the backend, run this command to start the MySQL database and phpMyAdmin:
```
docker-compose up -d mysql phpmyadmin
```
After this, you can make changes to the backend app and start it in your preferred IDE.

Please make sure to create a new branch when you develop a new feature.
