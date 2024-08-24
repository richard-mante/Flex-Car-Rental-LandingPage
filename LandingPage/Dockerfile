FROM node:22-alpine3.19
EXPOSE 3000
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
COPY . .

CMD ["npm", "run","preview"].
