//import libraries
const express = require('express');
session= require('express-session');
const server = express(); //create server instance

// Middleware to log requests
function logger(req,res,next){
    //log the request method and URL
    console.log(`${req.method} request for '${req.url}'`);
    next();
};

//link public directory for static files
server.use(express.static('public')); 

//link views directory for ejs templates
server.set('views', './views'); //set views directory


server.use(logger); //use the logger middleware


//create session middleware
server.use(session({
    secret:"vgchkel567823b:5^&UYG^&",
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 *30 //30 day - in milliseconds
    } 
}));

//routes
//handle home route only
server.get('/', (req, res) => {
    ctx={
        title: 'NewMart',
        message: 'Good to have you here!',
        notifs: true
    }
    res.render('home.ejs',ctx); //render home.ejs template with context
});

server.get('/about', (req, res) => {
    ctx={
        title: 'About NewMart',
    } 

    res.render('about.ejs',ctx); //render about.ejs template
});



//not found - capture all other routes -> Default 404 handler
server.use((req, res, next) => {
    res.send('Page not found');
});

//error handling middleware
server.use((err, req, res, next) => {
    console.error(err.stack);
    //res.status(500).send('Something went wrong!');
    res.send('Error occurred');
});


// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});