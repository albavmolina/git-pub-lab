// require express
 const express = require('express');

// set express()to a variable
const app = express();

// include a get route / that will res.send('Welcome to the Gitpub App!');so that when you got to localhost:3000, you will see Welcome to the Gitpub App!

app.get('/', (req, res) => {
    res.send(' Welcome to the Gitpub App!');
})

// set a variable of port to 3000
const port = 3000;

// set your app to listento the port and include a console.log(), so that you can tell when your server is running
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
}); 
