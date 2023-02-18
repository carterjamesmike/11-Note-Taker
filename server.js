const express = require('express');
const path = require('path');
const api = require('./routes/index');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api)

app.use(express.static('public'));



//GET homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//GET Notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//Wildcard route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});