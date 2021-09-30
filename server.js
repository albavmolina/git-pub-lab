// require express
 const express = require('express');

// set express()to a variable
const app = express();

// require database and set up dependencies 
const drinks = require('./models/drinks.js')
const foods = require('./models/foods.js')

// include a get route / that will res.send('Welcome to the Gitpub App!');so that when you got to localhost:3000, you will see Welcome to the Gitpub App!

app.get('/', (req, res) => {
    res.send(' Welcome to the Gitpub App!');
})

app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", {
       drink: drinks,
    });
});

app.get('/drinks/:id', (req, res) => {
        drinks[req.params.id];
        res.render('drinks_show.ejs', {
        drink:drinks[req.params.id]
        });
        });
        
app.get('/', (req, res) => {
res.send(' Welcome to the Gitpub App!');
})

app.get("/foods/", (req, res) => {
        res.render("foods_index.ejs", {
        food: foods,
        });
        });

app.get('/foodss/:id', (req, res) => {
        foods[req.params.id];
        res.render('foods_show.ejs', {
        food:foods[req.params.id]
        });
        });

// set a variable of port to 3000
const port = 3000;

// set your app to listento the port and include a console.log(), so that you can tell when your server is running
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
}); 
