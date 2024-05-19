// src/components/StudentForm.js
import React, { useState } from 'react';
import "./StudentForm.css";
const StudentForm = ({ addStudent }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ name, phoneNumber, email });
        setName('');
        setPhoneNumber('');
        setEmail('');
    };

    return (
        <form  className='student-form' onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
