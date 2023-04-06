# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Start the application
CMD ["node", "./dist/server.js"]