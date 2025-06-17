# Stage 1: Build Stage
FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Install dependencies based on package-lock.json
COPY package*.json ./
RUN npm i

# Copy entire project
COPY . .

# Build the Strapi admin panel
RUN npm run build

# Stage 2: Production Stage
FROM node:20-slim

WORKDIR /app

# Copy build files from the previous stage
COPY --from=build /app /app

# Install production dependencies only
RUN npm i --omit=dev

# Expose the port Strapi uses
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
