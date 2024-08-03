#!/usr/bin/env bash
# Start backend

docker-compose up -d mysql phpmyadmin
mvn clean install
docker-compose up -d --build app

# Start frontend
cd web
npm install
npm start