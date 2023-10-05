// import the pets array from data.js
const pets = require('./data');
console.log(pets);

// init express app
const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
// serve up the public folder as static index.html file
//use path module to construct the absolute path to the html file
    const filePath = path.join(__dirname, 'public', 'index.html');
//send the HTML file as a response    
    res.sendFile(filePath);

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
Pet.find({}, (err, allPets) => {
    if (err) {
        res.status().json({error: 'Error fetching pets from the database'});
    } else {
    // send the pets array as a response
    res.json(allPets);
    }
});
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const ownerName = req.query.ownerName;
    res.json(petsByOwner);


    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const petName = req.params.name;

    // find the pet in the pets array
    const petByName = pets.find(pet => pet.name === petName);
    if (petsByName) {
        res.json(petsByName);
        } else {
            res.status(404).json({error: 'Pet not found.'});
        }
        });
    

    // send the pet as a response

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;