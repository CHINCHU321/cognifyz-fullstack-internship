// src/App.js
import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import "./App.css";

const App = () => {
    const [students, setStudents] = useState([]);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
        <div className='app-container'>
            <h1>Student Management System</h1>
            <StudentForm addStudent={addStudent} />
            <hr/>
            <StudentList students={students} />
        </div>
    );
};

export default App;
