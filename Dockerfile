FROM node

RUN npm install

WORKDIR /opt/fript-api

CMD ["./node_modules/.bin/nodemon", "-L", "bin/api"]
