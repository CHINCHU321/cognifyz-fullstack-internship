const Task = require('../models/Task');

// Controller to get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Controller to create a new task
exports.createTask = async (req, res) => {
  try {
      const { title, name, email, phoneNumber } = req.body;
      const task = new Task({ title, name, email, phoneNumber });
      await task.save();
      res.status(201).json(task);
  } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ message: 'Server Error' });
  }
};

// Controller to delete a task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};
