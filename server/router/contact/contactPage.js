const express = require('express');
const bodyParser = require('body-parser');
const BusBoy = require('busboy');
const router = express.Router();

// const parseData = bodyParser.urlencoded({extended:false})
// router.use(parseData);

module.exports = () => {

    router.get('/', (req,res) => {

        // res.send('This is the contact page');
        
        res.render('contact', {
            page : 'Contact'
        })

    });



    router.post('/', (req, res) => {
        var busboy = new BusBoy({ headers: req.headers });
        busboy.on('field', function(name, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            console.log('Field [' + name.value + ']: value: ' + inspect(val));
        });
        res.send('OK');
    });
      


    // router.post('/', (req, res) => {
    //     var busBoy = new BusBoy({ headers: req.headers });
    //     busBoy.on('field', function(fieldname, val) {
    //        var name = val.name;
    //        var email = val.email;
    //        console.log(`Name is ${name} and email is ${email}`);
    //        res.send('Hurray!');
    //     });
    // });

    // router.post('/', (req,res,parseData) => {

    //     var busBoy = new BusBoy({ headers: req.headers });
    //     // busBoy.on('data', (name,email)=> {
    //     //     console.log("");
    //     //     file.on('data', function(data) {
    //     //         // console.log("");
    //     //         // console.log(data.name);
    //     //         // console.log(data.email);
    //     //     });
    //     //     file.on('end', function() {
    //     //         // console.log('File [' + fieldname + '] Finished');
    //     //     });
    //     // });
    //     busBoy.on('data',(data) => {
    //          console.log(data.name);
    //     });

    //     busBoy.on('finish', (data) => {

    //         console.log(busBoy);
    //         res.send('submitted');

    //     });
    //     req.pipe(busBoy);

    //     // console.log(req.busBoy.name);
    //     // console.log(req.busBoy.email);
    //     // // res.send(`${req.body.name}, you will be contacted on ${req.body.email}`);
    //     // res.render('confirmContact',{
    //     //     contactInfo : req.body
    //     // });
        
    // });

    return router;
    
}

