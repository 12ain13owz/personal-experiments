# Use Node.js as base image
FROM node:22-slim AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run with Nginx
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /app/dist/form-examples/browser /usr/share/nginx/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 4200

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]