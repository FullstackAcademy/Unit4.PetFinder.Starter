// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.send(pets);
    // send the pets array as a response
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name - Getting the pet by ID 
app.get('/api/v1/pets/:name', (req, res, next) => {
    // get the name from the request
    const { id } = req.params;
    if (!id.match(/[0-9]+/)) {
        console.log('passing to next route');
        next ();
    }
    


  

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;