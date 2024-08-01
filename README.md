# Gym Buddy Finder (GBF)

Gym Buddy Finder (GBF) is a web application designed to connect individuals looking for gym partners, potentially leading to romantic connections while enhancing their fitness journey. The app also provides a platform for gym businesses to be featured, offering them increased visibility and the ability to reach a targeted audience.


## Installation
Prerequisites
- Java 21
- Node.js and npm
- Docker
- docker-compose

To run the web app, please follow the instructions I've included below to start both backend and frontend.
  
### Backend Setup
After running the clone command, contact the repo owner to get the .env file and copy it to the root directory.
```
git clone git@github.com:naivebird/gym-buddy-finder.git
cd gym-buddy-finder
```
Build and package the backend app
```
mvn clean package
```

Start backend services (API), MySQL database, and phpMyAdmin.
```
docker-compose up --build -d
```

### Frontend Setup
```
cd gym-buddy-finder/web
```
If you run the project for the first time:
```
npm install
```
Start the web:
```
npm start
```
For development purposes, when setting up backend, run this command to start the MySQL database and phpMyAdmin:
```
docker-compose up -d mysql phpmyadmin
```
After this, you can make changes to the backend app and start it in your preferred IDE.

Please make sure to create a new branch when you develop a new feature.
