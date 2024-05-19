const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST requests to '/submit'
app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.render('index', { name });
    
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
