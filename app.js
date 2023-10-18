const http = require('http'); //importing http module

const express = require('express'); //importing express js 

const app = express(); //storing express in app varibale

app.use((req, res, next) => {  //creating middleware with 3 arguments request reponse and next
    console.log('In the middleware!');
    next(); // allows request to continue to the next middleware 
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send(`{key1: value}`); //sending response as html type
});

const server = http.createServer(app); //creating server

server.listen(3000);  // listens for 3000 port  
