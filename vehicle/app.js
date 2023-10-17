const express = require('express');

port = 8000;
const app = express();

app.set('view engine', 'ejs');


// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));


//Static files
app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'));
app.use('js', express.static(__dirname + 'public/js'));
app.use('img', express.static(__dirname + 'public/img'));


//import routes
const homeRouter = require('./routes/home');
const registerRouter = require('./routes/register');
const mainRouter = require('./routes/main');

app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/main', mainRouter);

app.listen(port, ()=>{
    console.log(`listening on port localhost ${port}`);
});