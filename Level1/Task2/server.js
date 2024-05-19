const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '../index')));

app.set('view engine', 'ejs');
// Serve your index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
        return res.status(400).send("All fields must be filled out");
    }

    // Store validated data in temporary server-side storage 
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Handle the form data as needed (e.g., save to database)
    console.log("Received form submission:", formData);

    res.send("Form submitted successfully!");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
