# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Build the application if needed
RUN npm run build

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define the command to run the app
CMD ["node", "dist/index.js"]
