#!/usr/bin/env bash
docker-compose up -d mysql phpmyadmin
mvn clean install
docker-compose up -d --build app
cd web
npm start