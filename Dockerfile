# docker official immage 
FROM node:alpine3.17

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
#COPY package*.json ./

# Install app dependencies
#RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000:3000
EXPOSE 80:80

# Define the command to run the app
CMD ["node", "server.js"]
