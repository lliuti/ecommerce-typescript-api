FROM node

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . /usr/app

COPY wait-for-it.sh .

EXPOSE 3000 9229

CMD ["npm", "run", "dev"]