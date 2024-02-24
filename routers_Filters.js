// app.js file

//Parsing incoming requests with routing using middlewares

const express = require('express'); //importing express js 
const bodyParser= require('body-parser');

const app = express(); //storing express in app varibale
const adminRoute= require('./routes/admin'); //importing admin.js file from routes folder
const shopRoute= require('./routes/shop');  //importing shop.js file from routes folder

app.use(bodyParser.urlencoded({extended: false}));  //parsing body(input data)

app.use('/admin', adminRoute); // filtering the routes
app.use(shopRoute);

app.use((req, res, next)=>{  // sending error page for non existed request
    res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000);  // listens for 3000 port  



// admin.js file

const express= require('express');

const routerr= express.Router(); // adding router method

router.get('/add-products', (req, res, next) => { // sending html form to add products through Get request
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Enter Product"> <input type="text" name="size" placeholder="Enter Size"> <button type="submit"> Add Product </button></form>'); //sending response as html form 
});

routerr.post('/add-product', (req, res, next) => {  
    console.log(req.body);
    res.redirect('/');
});

module.exports= routerr; // exporting module



// shop.js file

const express= require('express');

const router= express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1> Hello From Express</h1>'); 
});

module.exports =router; 