# Gym Buddy Finder (GBF)

Gym Buddy Finder (GBF) is a web application designed to connect individuals looking for gym partners, potentially leading to romantic connections while enhancing their fitness journey. The app also provides a platform for gym businesses to be featured, offering them increased visibility and the ability to reach a targeted audience.


## Installation
Prerequisites
- Java 21
- Node.js and npm
- Docker
- docker-compose
- Maven

To run the web app, please follow the instructions I've included below to start both backend and frontend.
If you are on a Windows machine, please consider using Git Bash.
  
### Step 1: Clone the repository
```
git clone git@github.com:naivebird/gym-buddy-finder.git
```
### Step 2: Start the app
It should take less than 2 minutes to start the database, backend, and frontend:
```
cd gym-buddy-finder
./start_app.sh
```
After you're done exploring the app, run this script to stop all running containers:
```
./stop_app.sh
```

### Notes

For development purposes, when setting up the backend, run this command to start the MySQL database and phpMyAdmin:
```
docker-compose up -d mysql phpmyadmin
```
After this, you can make changes to the backend app and start it in your preferred IDE.

Please make sure to create a new branch when you develop a new feature.
