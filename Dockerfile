# TODO add custom user instead of root

FROM node

ENV HOME=/opt/fript-api

RUN mkdir -p ${HOME}

COPY package.json ${HOME}

WORKDIR ${HOME}

RUN npm install

CMD ["./node_modules/.bin/nodemon", "bin/api"]
