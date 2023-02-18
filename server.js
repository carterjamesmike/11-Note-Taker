const express = require('express');
const path = require('path');
const api = require('./routes/index');
//const fs = require('fs');
//const uuid = require('./helpers/uuid');
//const { readAndAppend, readFromFile } = require('./helpers/fsUtils');

const PORT = process.env.PORT || 3001;
const app = express();

//const { notes } = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api)

app.use(express.static('public'));

//Create Note Function
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//Routes
//GET homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//GET Notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//POST /api/notes
app.post('/api/notes', (req, res) => {
    req.body.id = uuid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

//DELETE /api/notes/:id



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});