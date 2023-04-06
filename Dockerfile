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

# Image:        `docker build -t ssr-container .`
# Container:    `docker run -d -p 8000:8000 --rm --name ssr-container ssr-image`
# Stop:         `docker stop ssr-container`