# Use Node.js as base image
FROM node:24.12.0-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json
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
COPY --from=build /app/dist/[project-name]/browser /usr/share/nginx/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]