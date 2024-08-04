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
Check if you have already installed Maven first:
```
mvn -version
```
If Maven hasn't been installed, follow this instruction to install it:
https://stackoverflow.com/a/48411269<br/>
It should take less than 2 minutes to start the database, backend, and frontend:
```
cd gym-buddy-finder
./start_app.sh
```
### Step 3: Log in
#### App login
Address: 
```
http://localhost:3000/
```
Gym goer:
```
username: john.doe@example.com
password: password1
```
Admin: 
```
username: admin1@example.com
password: adminpassword1
```
#### Database login
Address: 
```
http://localhost:8081/
```
Credentials:
```
username: admin
password: gbfadmin
```
When you're in, you can use the credentials in the user_account table to log into the app.

### Step 4: Stop the app
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
