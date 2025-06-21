//create router object
const express = require('express');
const router = express.Router();

//create routes
router.get('/', (req, res) => {
    //render admin page
    res.render('admin/dashboard.ejs', {
        title: 'Newpart - Admin',
        message: 'Welcome to the Admin Page'
    });

});



//export router object
module.exports = router;