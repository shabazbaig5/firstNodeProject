const express = require('express');
const homeRouter = require('./router/home');
const config = require('./config/config');


const app = express();

console.log(config.siteInfo.sitename);

app.locals.title = config.siteInfo.sitename;

app.use(express.static('public'));


//setting the view engine
app.set('view engine', 'pug');

app.set('views', __dirname + '/views');
console.log(__dirname);
app.use('/', homeRouter());


app.listen(3000, () => {

    console.log("listening to port 3000");;

});



