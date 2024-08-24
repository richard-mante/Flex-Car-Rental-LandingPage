FROM node:22-alpine3.19
EXPOSE 5000
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
COPY . .

CMD ["serve", "-s", "build", "-l", "5000"]