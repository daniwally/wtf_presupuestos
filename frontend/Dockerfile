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

# Install serve globally
RUN npm install -g serve

# Copy built files from build stage
COPY --from=build /app/build ./build

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Start the server
CMD ["sh", "-c", "serve -s build -l ${PORT:-3000}"]
