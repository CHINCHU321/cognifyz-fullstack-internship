import React from 'react';
import './TaskList.css';

function TaskList({ tasks }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li key={index} className="task-item">
                    <span>{task.title}</span>
                    <span>{task.name}</span>
                    <span>{task.email}</span>
                    <span>{task.phoneNumber}</span>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
