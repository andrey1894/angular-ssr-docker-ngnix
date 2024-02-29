# Use Node.js LTS version as the base image
FROM node:20 as build

# Install ubuntu packages
RUN apt-get update
RUN apt-get install -y gettext

# Set the working directory
RUN mkdir -p /var/www/dockerize-angular/angular-app
WORKDIR /var/www/dockerize-angular/angular-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application
COPY . .

# Read secrets
ARG AUTH0_DOMAIN
ARG AUTH0_CLIENT_ID
ARG AUDIENCE
ARG API_URL

ENV AUTH0_DOMAIN=${AUTH0_DOMAIN}
ENV AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID}
ENV AUDIENCE=${AUDIENCE}
ENV API_URL=${API_URL}

# Apply secrets
RUN envsubst < auth.config.template.json > auth.config.json

# Build the Angular application for SSR
RUN yarn build

# EXPOSE 4000

# ENV ANGULAR_HOST=0.0.0.0

# ENV ANGULAR_PORT=4000

# CMD [ "npm", "start" ]
