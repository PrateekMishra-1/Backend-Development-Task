const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

//dotenv setup
require('dotenv').config();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
    dbName: 'todo-list',
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Connection error:', err);
});

// Routes
app.use('/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
