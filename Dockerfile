FROM node:17 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# production environment
FROM nginx:stable
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
