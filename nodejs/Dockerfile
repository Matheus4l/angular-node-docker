FROM node:12

WORKDIR /usr/src/app/nodejs

COPY package*.json ./

RUN npm install

EXPOSE 3080 

CMD ["npm", "run", "dev"]