const express = require('express');

const router = express.Router();


module.exports = () => {

    router.get('/', (req, res) => {

        // res.send("this is the gallery page");
        res.render('gallery',{
            page: 'Gallery'
        });
    
    });

    return router;

}




