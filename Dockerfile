FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g vite
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]