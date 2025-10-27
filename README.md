# Job Tracker MERN Project

A simple job application tracker using MERN stack:
- MongoDB as the database
- Express.js backend API
- React frontend using Vite
- Axios for API calls

---

## Folder Structure

my-job-tracker/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── .env
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
└── README.md

text

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

text

3. Start frontend development server:

npm run dev

text

4. Open browser at `http://localhost:3000` (or address shown in console).
