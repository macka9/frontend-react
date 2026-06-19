# React + Flask Data Comparison App

A simple full‑stack application built with React frontend and Flask backend to compare data sets.  
The React app provides a form for entering two sets of values, while the Flask server processes the input and returns the differences.  
This project demonstrates basic integration between a modern frontend framework and a Python backend API.

## Features
- Input data through a React form  
- Send data to Flask backend via fetch API  
- Display differences in real time  
- CORS support for cross‑origin requests  

## Tech Stack
- React (frontend)  
- Flask (backend)  
- Node.js + npm  
- Python 3.12  

## Installation

### Backend (Flask)
Navigate to the backend folder:
```bash
cd backend
Install dependencies:

bash
python -m pip install flask flask-cors
Run the server:

bash
python app.py
The backend will run on http://localhost:5000.

Frontend (React)
Navigate to the frontend folder:

bash
cd frontend-react
Install dependencies:

bash
npm install
Start the development server:

bash
npm start
The frontend will run on http://localhost:3000.

Usage
Open the React app in your browser (http://localhost:3000).

Enter two sets of comma‑separated values.

Click Compare.

The app will display the differences returned by the Flask backend.

Deployment to GitHub Pages
Install gh-pages:

bash
npm install gh-pages --save-dev
Add the following to package.json:

json
"homepage": "https://<username>.github.io/frontend-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy:

bash
npm run deploy
Your app will be available at:
https://<username>.github.io/frontend-react