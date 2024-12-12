const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create a new task
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch a task by its ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update the task status
router.put('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'in-progress', 'completed'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status' });
        }
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a task by its ID
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;