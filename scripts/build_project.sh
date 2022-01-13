#!/bin/bash

echo "Build start"

echo "Go to folder"
cd react-pizza 

echo "Remove key from CircleCI"
rm aws_server_key.pem

echo "Build docker image"
docker build -t react-pizza:prod .

echo "Start docker container"
sudo docker run -it -rm -v ${PWD}:/app -v /app/node_modules -p 3000:80 react-pizza:prod

echo "Build end"