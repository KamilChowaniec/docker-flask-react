FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install && npm cache clean --force

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]