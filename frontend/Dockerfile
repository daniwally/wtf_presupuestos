# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package.json for serve
COPY package.json ./

# Install only serve
RUN yarn add serve

# Copy built files from build stage
COPY --from=build /app/build ./build

# Expose port
EXPOSE 3000

# Start the server using npx
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
