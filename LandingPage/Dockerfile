FROM node:22-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build


# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "preview"]