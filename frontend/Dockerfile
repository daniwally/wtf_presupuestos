# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

# Production stage with nginx
FROM nginx:alpine

# Copy built React app
COPY --from=build /app/build /usr/share/nginx/html

# Nginx config for SPA (React Router)
RUN echo 'server { listen 80; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
