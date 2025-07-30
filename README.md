# React + Flask Quiz App demo

This project contains a **React frontend** and a **Flask backend** for a multiple-choice quiz.
It uses a split deployment model: frontend and backend are run separately.

---

## Project Structure

```
react-flask-quiz-template/
├── frontend/           # React app (JS, JSX, CSS)
│   ├── public/
│   ├── src/
│   └── package.json
├── backend/            # Flask backend API
│   ├── app.py
│   └── requirements.txt
├── data/
│   └── questions.json  # Quiz questions (used by backend)
```

---

## Prerequisites

### 1. Install Python (if not yet installed)
- https://www.python.org/downloads/
- Check: `python --version`

### 2. Install Node.js and npm
- https://nodejs.org (install **LTS version**)
- Check:
  ```bash
  node -v
  npm -v
  ```

---

## How to Run the App

### 1. Start the Flask Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

The backend will run at: `http://localhost:5000`

---

### 2. Start the React Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run at: `http://localhost:3000`

---

## How It Works

- Frontend sends a **GET** request to `http://localhost:5000/api/questions`
- Flask returns quiz questions from `data/questions.json`
- User answers are submitted via **POST** to `/api/submit`
- Responses are saved in `backend/responses.json` and `responses.csv`

---

## Notes

- CORS is enabled in the Flask app to allow cross-origin requests
- You can refactor the backend to use a database or modularize with `db.py`
- To deploy this project, you'll need to host frontend and backend separately

