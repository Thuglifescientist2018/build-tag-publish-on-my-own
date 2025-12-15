FROM node:25-alpine
WORKDIR /app/
COPY . .
EXPOSE 80
CMD ["yarn", "start"]