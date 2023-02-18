const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();

const { notes } = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use('/api', api)

app.use(express.static('public'));

//API Routes
//GET homepage
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET /api/notes
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//POST /api/notes

//DELETE /api/notes/:id



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});