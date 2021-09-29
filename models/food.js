
HOME
COURSE DETAILS
SUBMIT HOMEWORK
Search here…
/
Git Pub
Git Pub
Make a pub app that displays data inside server-side rendered views.




Learning Objectives

Practicing index and show routes with express and ejs
Prerequisites

JavaScript
Express
Node
EJS



The App (User Stories)
The latest hottest trend in food and drinks are pubs for the sober curious! Let's build an app of menu items to help gitPub become the place to be!

When a user goes to the /drinksroute, they should see an indexof all the drinks available at the pub
Index: The name of each drink should be rendered to the page, each name should be clickable
When a user clicks on the name of one of the drinks, they should be taken to that drink's showpage
Show: The name, image, and price of each drink should be rendered to the page



Getting Started



Setting up the file structure
In terminal:

mkdir gitpub
cd gitpub
mkdir views
touch views/drinks_index.ejs views/drinks_show.ejs
mkdir models
touch models/drinks.js
touch server.js
npm init
follow the npm initprompts
thought question: does npm init create a file? if it does, where does it create it and what is the name of the file?
code .
Make sure you did it right:

Approximate File Structure ▼



In terminal, install the necessary NPM packages

Remember, make sure you're in the same directory for the app you want to install the packages for!

npm i express ejs
check your package.json in to make sure they installed
🔴 Remember to commit!




Setting up your server
In server.js

require express
set express()to a variable
set a variable of portto 3000
set your app to listento the port and include a console.log(), so that you can tell when your server is running
include a get route / that will res.send('Welcome to the Gitpub App!');so that when you got to localhost:3000, you will see Welcome to the Gitpub App!
In terminal

nodemonor nodemon server.js(if you set your up your package.jsoncorrectly to start server.jsyou don't need to put it after nodemon)
Remember! nodemonwill only work if you run it from the same location as your package.json
In the browser

go to localhost:3000(or whatever port you set it to)
check that you have your Welcome to the Gitpub App!message displaying
🔴 Remember to commit!




Setting up your "database"
When setting up, you created a file called drinks.jsin your modelsfolder. For now, this will act as our "database".

Inside drinks.js, paste the following data as is

You may notice that the image url's are missing a certain something, but this is intentional! Do not directly edit any of the provided data inside your drinks.jsfile. We'll fix things programmatically!

const drinks = [
  {
    name: "cruddy mary",
    price: 132,
    image: "https://i.imgur.com/Va5iIw5.jpg",
  },
  {
    name: "index on the beach",
    price: 68,
    image: "https://i.imgur.com/XV2aPa2.jpg",
  },
  {
    name: "hack & coke",
    price: 1,
    image: "https://i.imgur.com/rLOXFRI.jpg",
  },
  {
    name: "whiskey-value pair",
    price: 11,
    image: "https://i.imgur.com/a7rmkoS.jpg",
  },
  {
    name: "404 horsemen",
    price: 202,
    image: "https://i.imgur.com/FLucOLr.jpg",
  },
  {
    name: "if stateMint julep",
    price: 2,
    image: "https://i.imgur.com/yaoK0Dg.jpg",
  },
  {
    name: "APIPA",
    price: 43,
    image: "https://i.imgur.com/qAhA7pi.jpg",
  },
  {
    name: "node to joy",
    price: 56,
    image: "https://i.imgur.com/MbVdwZz.jpg",
  },
]
Set up your 'database' so that it can be exported to your server.jsand then be required by your server.js
Set this 'database' to a variable called drinks in your server.jsfile
Create a get route /drinksthat will res.send(drinks), which will display your drinks data as json in the browser
🔴 Remember to commit!




Setting up your index view
Instead of displaying json at your /drinks route, you should serve the drinks_index.ejsfile you created that will display your drinks
In drinks_index.ejs

Start with your HTML boilerplate
Add an <h1>that describes the page, i.e. Welcome to gitPub
Add a <style>tag so you can write some CSS directly inside your htmlfile.
See more info here
Wondering how you can connect a separate .cssfile? We'll learn about it later, or you can look at the Hungry for More section that will point you in the right direction to research!
Add a background-colorand text colorto to bodyso that you can ensure your css is working correctly
For example:

<style type="text/css">
  body {
    color: blanchedalmond;
    background-color: steelblue;
  }
</style>
Change your /drinksroute to res.renderyour drinks_index.ejs
In your browser, go to localhost:3000/drinksto make sure you're rendering the drinks_index.ejsfile!
🔴 Remember to commit!




Setting up your index view to show your drinks data
In your drinks_index.ejs, make it so that you can see:*

The name of each drink as a list item inside an unordered list
This list should be dynamically rendered by ejs based on your data from your 'database'
You'll notice the drink names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names
🔴 Remember to commit!




Setting up your show route
In server.js

Add a new get route for /drinks/:id
For now, just make sure it works correctly by havine the route res.send(req.params.id)
So that when you go to localhost:3000/drinks/whatever, whatevershould show up in the browser
🔴 Remember to commit!




Linking drinks_index.ejsto drinks_show.ejs
In index.ejs

Make each listed drink a link that will go to the route /drinks/x, where 'x' is the array position of the drink in the data array. This should be set dynamically with ejs!
When you click the link, it show go to the show route and the index number corresponding to the drink's array position should be displayed
🔴 Remember to commit!




Rendering an individual drink in the show view
In show.ejs

Copy/paste your code from your drinks_index.ejsinto your drinks_show.ejs
surely, there must be a better way to not copy/paste; are you wondering if there is something in the hungry for more section about this?
Change all your html code inside your drinks_show.ejsfile's <body>so that:
Your h1tag says "At foo bar"
There's an h2tag that should display the name of the drink
There's an image tag that should display the image of the drink
There's an h3tag that should display the price of the drink
Add an anchor tag with the text of back, that will take you back to your index.ejs view
In server.js

Update the get route to render the showview with the drinks data
Oh no! If you check on the browser, the image is broken because in our database the image links don't have the .pngending, let's fix that programatically!

Without going back to the drinks.jsdatabase file and editing it there, add on .pngto the end of the drink's image data programatically
Thought question: Where should you do this? server.js or show.ejs? Or does it not matter, i.e. will either one work?
🔴 Remember to commit!




Our gitPub is missing some food, so let's add some!

Add a second 'database' by creating a food.jsfile in the modelsfolder and use the following data:
const food = [
  {
    name: "(req, rEscargot)",
    price: 12,
    image: "https://i.imgur.com/BRgv2rz.jpg",
  },
  {
    name: "Nulltimate Nachos",
    price: 10,
    image: "https://i.imgur.com/vKRbSHN.jpg",
  },
  {
    name: "split() pea soup",
    price: 1,
    image: "https://i.imgur.com/qd9jheG.jpg",
  },
  {
    name: "CURLy Fries",
    price: 11,
    image: "https://i.imgur.com/lEQ1AdY.jpg",
  },
  {
    name: "Garlic NaN",
    price: 202,
    image: "https://i.imgur.com/UEx7cYk.jpg",
  },
  {
    name: "Baby Got BackEnd Ribs",
    price: 2,
    image: "https://i.imgur.com/XbRMQ3g.jpg",
  },
  {
    name: "Git Pull Pork Sandwich",
    price: 43,
    image: "https://i.imgur.com/QZW3gJg.jpg",
  },
]

module.exports = foods
