# DashBack
Created from VS 2019 using Basic Node.js Express 4 Web Server

# Run from command line
# Expects MONGO_USER and MONGO_PWD to be exported in env
node app.js

# Run in docker container
docker build .
# env vars must be exported
docker run -p 3000:3000 [imageId] -e MONGO_USER -e MONGO_PWD

docker inspect [containerId]   # to view network, etc
docker ps

Test with curl
