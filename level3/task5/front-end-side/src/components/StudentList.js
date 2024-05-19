// src/components/StudentList.js
import React from 'react';
import "./StudentList.css";

const StudentList = ({ students }) => {
    return (
        <div className='student-list'>
            <h2>Student List</h2>
            <div className='Student-List-item'>
            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        <div>Name: {student.name}</div>
                        <div>Phone Number: {student.phoneNumber}</div>
                        <div className='email'>Email: {student.email}</div>
                    </li>
                ))}
            </ul>
            </div>
            
        </div>
    );
};

export default StudentList;
