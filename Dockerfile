FROM node:14.7-alpine

WORKDIR /home/app
COPY . .
RUN npm install
RUN npm run build

CMD npm run serve
