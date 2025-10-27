# Job Tracker MERN Project

A simple job application tracker using MERN stack:
- MongoDB as the database
- Express.js backend API
- React frontend using Vite
- Axios for API calls

---

## Setup and Running Instructions

### Backend

1. Navigate to the backend folder:

cd backend

text

2. Install backend dependencies:

npm install

text

3. Setup `.env` file with your MongoDB URI and PORT, e.g:

MONGO_URI=mongodb://localhost:27017/jobTrackerDB
PORT=5000

text

4. Start the MongoDB server on your system (must be installed):

- Windows: Run Command Prompt as Administrator and run:

net start MongoDB

text

- Linux/Mac: Run `mongod`

5. Start backend server with:

npm run dev

text

---

### Frontend

1. Navigate to the frontend folder:

cd frontend

text

2. Install frontend dependencies:

npm install

3text

3. Start frontend development server:

npm run dev

text

4. Open browser at `http://localhost:3000` (or address shown in console).

---
## How API works
API is defined as Application programmable interface that helps to communicate between to medium. 

## frontend:
React + Vite is used as frontend, that helps to interact with users to get data and it make HTTP request to the backend API to get job done or it helps to modify jobs when we add, update and delete the values.
It call the corresponding API endpoint to update the data on the server
## Backend (Express):

Express is used as a backend server and middleware to get data from the users and modify that raw data into json() format and send it to the backend database.
Helps to create the backend server.
Frontend -> Express (Middleware) <- backend => Both frontend and backend communicate with help API
It helps to get data from the user and give it to the mongodb database

GET /api/jobs returns all jobs.

POST /api/jobs adds a new job.

PUT /api/jobs/:id edits a job by its ID.

DELETE /api/jobs/:id deletes a job by its ID.

## MongoDB:

A NoSQL database to store all your job applications. Each job has details like company name, job title, application date, and status.

