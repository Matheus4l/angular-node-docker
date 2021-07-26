FROM node:12

WORKDIR /usr/src/app/angular

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install



CMD ["ng","serve","--host", "0.0.0.0"]