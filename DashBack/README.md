# DashBack

# Run from command line
node app.js # expects MONGO_USER and MONGO_PWD to be exported in env

# Run in docker container
docker build .  
docker run -p 3000:3000 -e MONGO_USER -e MONGO_PWD [imageId]

docker ps
docker inspect [containerId]   
docker exec -it [containerId] sh

(test with curl)

# Notes
Created from VS 2019 using Basic Node.js Express 4 Web Server
