FROM node:14.15.4

WORKDIR /
RUN git clone https://github.com/deelivingston/dash-back.git
WORKDIR /dash-back/DashBack
ENV NPM_CONFIG_LOGLEVEL warn
ENV MONGO_USER user
ENV MONGO_PWD pwd

RUN npm install

EXPOSE 3000
ENTRYPOINT ["node", "app.js"]
