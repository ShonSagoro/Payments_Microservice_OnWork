FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g ts-node-dev

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]