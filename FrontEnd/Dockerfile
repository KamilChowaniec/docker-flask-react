FROM node:alpine

COPY . /app

WORKDIR /app

RUN npm install --silent --no-optional && npm cache clean --force

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]