// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname + '/public/index.html');
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);
    // http://localhost:8080/api/v1/pets
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const {owner} = req.query; 
    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);
    console.log("owner: " + req.query.owner);
    // send the pet as a response
    res.send(pet);
    // http://localhost:8080/api/v1/pets/owner?owner=John
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const {name} = req.query;
    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);
    console.log("name: " + req.query.name);
    // send the pet as a response
    res.send(pet)
    // res.send("name: " + req.query.name);
    // http://localhost:8080/api/v1/pets/name?name=Spot
});



app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;