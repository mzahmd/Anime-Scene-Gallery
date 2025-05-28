FROM node:24.1-alpine3.20
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json .
# install dependencies
RUN npm install
# Copy the rest of the application files
COPY . .
# Expose the port the app runs on
EXPOSE 5173
# Define the command to run the application
CMD ["npm", "run", "dev"]
