// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;
// app.listen(8080, () => {
//     console.log("Server is alive on port 8080")
// })

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
    // send the pets array as a response
    const petNames = pets.map(pet => pet.name);
    res.send(`All pet names: ${petNames.join(', ')}`);});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const ownerNames = pets.map(pet => pet.owner);
    res.send(`All owners names: ${ownerNames.join(', ')}`);;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
//     // get the name from the request
const name = req.params.name;

//     // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    if (pet) {
        res.json(pet);
    } else {
        res.status(404).send('Pet not found');
    }

});

// from 62-71 uses query, but it doesn't make as much sence as params for me so I am sticking with it

// app.get('/api/v1/pets', (req, res) => {
//     const name = req.query.name;
//     const pet = pets.find(pet => pet.name === name);
    
//     if (pet) {
//         res.json(pet);
//     } else {
//         res.status(404).send('Pet not found');
//     }
// });

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;