# Todo List API

This is a simple Todo List API built using Node.js, Express, and MongoDB.

---

## Prerequisites

Before running this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or above)
- [MongoDB](https://www.mongodb.com/) (running locally or an online Atlas instance)
- A REST client (e.g., [Thunder Client] or [Postman])

---

## Project Setup

1. Clone this repository:
   
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   
   npm install
   ```

3. Set up the MongoDB connection:
   - Open the `app.js` file.
   - Replace process.env.MONGO_URI with "mongodb+srv://dbUser:NMY24Wwt7MaeNvP2@cluster0.dqupc.mongodb.net/"
     

4. Start the server:
   
   npm start
   ```

   By default, the server runs on `http://localhost:3000`.

---

## API Endpoints

### Base URL: `http://localhost:3000/tasks`

### Endpoints:

1. **Create a Task**
   - **POST** `/tasks`
   - **Request Body:**
     ```json
     {
       "title": "Task Title",
       "description": "Task Description",
       "status": "pending"
     }
     ```

2. **Get All Tasks**
   - **GET** `/tasks`

3. **Get Task by ID**
   - **GET** `/tasks/:id`

4. **Update Task Status**
   - **PUT** `/tasks/:id`
   - **Request Body:**
     ```json
     {
       "status": "in-progress"  // or "completed", "pending"
     }
     ```

5. **Delete a Task**
   - **DELETE** `/tasks/:id`

---
