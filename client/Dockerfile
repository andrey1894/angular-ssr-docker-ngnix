# Use Node.js LTS version as the base image
FROM node:20 as build

# Set the working directory
RUN mkdir -p /var/www/dockerize-angular/angular-app
WORKDIR /var/www/dockerize-angular/angular-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application
COPY . .

# Build the Angular application for SSR
RUN yarn build

# EXPOSE 4000

# ENV ANGULAR_HOST=0.0.0.0

# ENV ANGULAR_PORT=4000

# CMD [ "npm", "start" ]
