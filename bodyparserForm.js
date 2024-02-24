
//Parsing incoming requests with routing using middlewares

const express = require('express'); //importing express js 
const bodyParser= require('body-parser');

const app = express(); //storing express in app varibale

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-products', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Enter Product"> <input type="text" name="size" placeholder="Enter Size"> <button type="submit"> Add Product </button></form>'); //sending response as html form 
});

app.use('/product', (req, res, next) => {  
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req, res, next) => {  // Default page
    res.send('<h1>Hello Express!</h1>');
});

app.listen(3000);  // listens for 3000 port  
