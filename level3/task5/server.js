// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

let students = [];

// Create a new student
app.post('/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).send(student);
});

// Get all students
app.get('/students', (req, res) => {
    res.status(200).send(students);
});

// Other CRUD endpoints (Update, Delete) can be added similarly

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
