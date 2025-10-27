# Job Tracker MERN Project


# Combined Commands Summary

# Clone your repository
git clone <your-repo-url>

# Navigate to backend
cd backend
npm install
npm run dev

# Open another terminal and start frontend
cd frontend
npm install
npm run dev

# About
A simple **Job Application Tracker** built using the **MERN stack**, allowing users to add, view, edit, and delete job applications with a clean UI.

---
## Tech Stack

- **MongoDB** → Database  
- **Express.js** → Backend API  
- **React (Vite)** → Frontend  
- **Node.js** → Server runtime  
- **Axios** → For API calls  

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


---

## Setup and Running Instructions

### 🖥 Backend Setup

```bash
# Step 1: Navigate to backend folder
cd backend

# Step 2: Install backend dependencies
npm install

# Step 3: Create a .env file and add:
MONGO_URI=mongodb://localhost:27017/jobTrackerDB
PORT=5000

# Step 4: Start MongoDB server
# Windows:
net start MongoDB
# Linux/Mac:
mongod

# Step 5: Start the backend server
npm run dev

# run backend 
http://localhost:5000

Frontend Setup

# Step 1: Navigate to frontend folder
cd frontend

# Step 2: Install frontend dependencies
npm install

# Step 3: Start the frontend development server
npm run dev

http://localhost:3000 -> check this on browser 