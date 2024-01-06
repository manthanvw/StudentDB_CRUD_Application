# Project Readme

This document provides instructions on how to set up and run the project. Follow the steps below to get started:

## Prerequisites

Before you begin, ensure you have the following:

1. **MongoDB Cluster:** Create a cluster on MongoDB by referring to the official website: [MongoDB](https://www.mongodb.com/). Take note of the username and password for your cluster.

2. **Git:** Clone the project repository using the following command:

   ```bash
   git clone https://github.com/manthanvw/StudentDB_CRUD_Application.git
   ```
Setup
Navigate to the project directory:

```bash
cd StudentDB_CRUD_Application
```
Install NPM libraries:
```bash
npm install
```
Create a .env file in the project root directory. Add the following variables with your MongoDB username and password:

```.env
MONGO_USER=<your_username>
MONGO_PASS=<your_password>
```
Create an index.html file for handling requests. Configure the requests as follows:

POST: Insert data

GET: Retrieve all data in the database

PUT: Update data

DELETE: Delete a record

### Send all requests to http://localhost:3000.

If the connection URL in connection.js doesn't work, obtain the correct URL from MongoDB.

# Running the Application
## Start the server and database:
Once the setup is complete, follow these steps to run the application:


After creating the frontend, run the following command to launch the server and database.
```bash
npm start
```

### This will initialize the server, allowing you to interact with the database through the specified endpoints. For any issues with the connection URL, refer to MongoDB for assistance.

## Launch the Frontend:

Open index.html using a live server or any browser of your choice.