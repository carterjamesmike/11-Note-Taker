const notes = require('express').Router();
const { 
    readFromFile, 
    readAndAppend, 
    writeToFile 
} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});



module.exports = notes;