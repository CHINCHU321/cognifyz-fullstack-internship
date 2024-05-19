import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="app-container">
            <h1>students survey</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
