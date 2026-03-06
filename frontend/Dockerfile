# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Production stage  
FROM node:20-alpine AS production

WORKDIR /app

# Install serve globally
RUN yarn global add serve

# Copy built files from build stage
COPY --from=build /app/build ./build

# Railway sets PORT env variable
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start the server - use sh to expand $PORT
CMD sh -c "serve -s build -l tcp://0.0.0.0:${PORT}"
