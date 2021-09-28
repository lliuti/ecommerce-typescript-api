FROM node

WORKDIR /usr/app

COPY . .

RUN npm install

COPY wait-for-it.sh .

EXPOSE 3000 9229

CMD ["npm", "run", "dev"]