const express = require('express');

const router = express.Router();
const galleryRouter = require('./gallery/galleryPage');
const contactRouter = require('./contact/contactPage');

module.exports = () => {

    router.get('/', (req, res) => {

        // res.send('this is the home page');
        res.render('home',{
            page : 'Home'
        });

    });

    router.use('/gallery',galleryRouter()); 
    router.use('/contact', contactRouter());

    return router;

}