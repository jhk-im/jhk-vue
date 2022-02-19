# Apple Chip -> --platform linux/amd64 추가
# docker build --platform linux/amd64 -t kjhun/vue3-vite-quasar:0.0.1 . 

# docker run 
# docker run --name vue3-vite-quasar -p 9080:80 kjhun/vue3-vite-quasar:0.0.1

# develop stage
FROM node:17-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]