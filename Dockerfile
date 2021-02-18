FROM node:14.15.4-alpine3.10
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
