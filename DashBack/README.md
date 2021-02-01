# DashBack

# Run from command line
node app.js # expects MONGO_USER and MONGO_PWD to be exported in env

# Run in docker container
docker build .  
docker run -p 3000:3000 [imageId] -e MONGO_USER -e MONGO_PWD

docker inspect [containerId]   # to view network, etc
docker ps

(test with curl)

# Notes
Created from VS 2019 using Basic Node.js Express 4 Web Server
