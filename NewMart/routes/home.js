//create router object
const express = require('express');
const router = express.Router();

//create routes
router.get('/', (req, res) => {
    ctx={
        title: 'NewMart',
        message: 'Good to have you here!',
        notifs: true
    }
    res.render('home/home.ejs',ctx); //render home.ejs template with context
});

router.get('/about', (req, res) => {
    ctx={
        title: 'About NewMart',
    } 

    res.render('home/about.ejs',ctx); //render about.ejs template
});



//export router object
module.exports = router;