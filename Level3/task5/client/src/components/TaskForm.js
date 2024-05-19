import React, { useState } from 'react';
import './TaskForm.css';
import axios from 'axios'; // Import Axios for HTTP requests

function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/api/tasks', { title, name, email, phoneNumber });
          console.log(response.data);
          // Handle successful response
      } catch (error) {
          console.error('Error creating task:', error);
          // Handle error
      }
  };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;
