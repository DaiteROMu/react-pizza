#!/bin/bash

echo "Deploy start"

echo "Create key"
# write server key to file
echo "-----BEGIN RSA PRIVATE KEY-----" >> aws_server_key.pem
echo $AWS_SERVER_KEY >> aws_server_key.pem
echo "-----END RSA PRIVATE KEY-----" >> aws_server_key.pem
# update key access
sudo chmod 600 aws_server_key.pem

echo "Delete all files on server"
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i aws_server_key.pem $AWS_SERVER_USER@$AWS_SERVER_HOSTNAME "cd /home/$AWS_SERVER_USER ; mkdir react-pizza ; sudo rm -rf react-pizza/*"

echo "Copy files to aws server"
# copy files to aws server
scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i aws_server_key.pem -r ./* $AWS_SERVER_USER@$AWS_SERVER_HOSTNAME:/home/$AWS_SERVER_USER/react-pizza/

echo "Run build script on server"
# run build script on server
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -i aws_server_key.pem $AWS_SERVER_USER@$AWS_SERVER_HOSTNAME "sh /home/$AWS_SERVER_USER/react-pizza/scripts/build_project.sh"

echo "Remove key file"
# remove key file
rm aws_server_key.pem

echo "Deploy end"
