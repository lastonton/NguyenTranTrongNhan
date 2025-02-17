Express CRUD API

Description

This is a simple CRUD API built using Express.js and MongoDB with Mongoose. It allows users to create, retrieve, update, and delete resources.

Features

Create a new resource

Retrieve a list of resources with optional filtering

Retrieve a specific resource by ID

Update a resource by ID

Delete a resource by ID

Prerequisites

Make sure you have the following installed:

Node.js (>= 14.x recommended)

MongoDB (Local or Cloud instance, e.g., MongoDB Atlas)

Installation

Clone this repository:

git clone https://github.com/your-repository.git
cd your-repository

Install dependencies:

npm install

Running the Server

To start the server in development mode:

npm run dev

API Endpoints

1. Create a WorkList

POST /worklist

Request Body:

{
  "title": "New Task",
  "description": "This is a test task"
}

Response: Returns the created worklist.

2. List WorkList

GET /worklist

Optional Query Parameter:

name (Filters resources by title)

Response: Returns a list of worklist.

3. Get a WorkList by ID

GET /worklist/:id

Response: Returns the specified worklist.

4. Update a WorkList

PUT /worklist/:id

Request Body:

{
  "title": "Updated Task",
  "description": "Updated description",
  "status": "Updated Status"
}

Response: Returns the updated worklist.

5. Delete a WorkList

DELETE /worklist/:id

6. Get a WorkList by Status (Filter)

GET /worklist/status/:status

Response: Returns the specified worklist.

Response: Returns 204 No Content if successful.

Technologies Used

Node.js

Express.js

MongoDB with Mongoose

TypeScript (if applicable)
