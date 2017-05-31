FROM node

RUN yarn

CMD ["tail", "-f", "/etc/hosts"]

