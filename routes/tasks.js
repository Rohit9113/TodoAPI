const express = require('express');
const Task = require('../models/task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Protected routes - require authentication
router.use(authMiddleware);

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tasks' });
  }
});

// Create a task
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const task = await Task.create({ userId: req.user._id, name, description });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Update a task
router.put('/:taskId', async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.taskId, { name, description, status }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete a task
router.delete('/:taskId', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.taskId);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
