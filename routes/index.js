// Description: This file is the entry point for all routes
const express = require('express');

//Import the notes router
const notesRouter = require('./notes');

//Create the router
const app = express();

//Use the notes router
app.use('/notes', notesRouter);

//Export the router
module.exports = app;