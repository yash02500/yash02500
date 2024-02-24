//Main.js file (for executing the code and starting server)


// Importing necessary modules to setup express.js
const express = require('express'); 
const bodyParser = require('body-parser');
const main = express();

// Import files for handling login and messages.
const login = require('./Group chat app/login');
const messageList = require('./Group chat app/userMessages');

// Configure middleware to parse form data and serve static files from a 'public' directory.
main.use(bodyParser.urlencoded({ extended: false }));
main.use(express.static('public'));

// Use the login and messageList modules as middleware.
main.use(login); 
main.use(messageList);

main.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

main.listen(3000);



//userMessages.js file  (to read and write messages)


const express = require('express');
const router = express.Router();
const userList= require('./userlist');  //importing userlist which contains usernames
const fs = require('fs');  //import file system module

router.get('/', (req, res, next) => { 
    const username = userList.join(', ');  // Retrieve the username from the user list on the server. 

    fs.readFile('chatMessages.txt', 'utf8', (err, data) => {  // Read chat messages from a .txt file and display them.
        if (err) {
            console.error('Error reading chat messages:', err);
            res.send(`<form action="/send-message" method="POST"><input type="text" name="message" placeholder="Type message"> <button type="submit">SEND</button></form><p>Welcome, ${username}!</p><p>Chat messages are unavailable.</p>`);
        } else {
            res.send(`<form action="/send-message" method="POST"><input type="text" name="message" placeholder="Type message"> <button type="submit">SEND</button></form><p>Welcome, ${username}!</p><p>Chat messages:<br>${data}</p>`);
        }
    });
});

router.post('/send-message', (req, res, next) => {
    const username = userList.join(', '); // Retrieve all usernames from the user list on the server.
    const message = req.body.message; // Extract the message from the request.

    const messageToAppend = `${username}: ${message}\n`;  // Append the new message to the chatMessages.txt file.

    fs.appendFile('chatMessages.txt', messageToAppend, (err) => {  // Append the new message to the chatMessages.txt file.
        if (err) {
            console.error('Error writing chat message:', err);
        } else {
            console.log('Message saved to chatMessages.txt');
        }
    });

    res.redirect('/');
});

module.exports = router;



//login.js file  (for user login)


const express = require('express');
const userList= require('./userlist'); //importing userlist which contains usernames
const router = express.Router();

router.get('/login', (req, res, next) => {  //check url for /login if matched then send below html form
    res.send('<form action="/user-login" method="POST"><input type="text" name="username" placeholder="Enter Username"> <button type="submit">Login</button></form>'); //send html form to login by username
});

router.post('/user-login', (req, res, next) => {
    const username = req.body.username; // Extract the username from the request.

    if (userList.includes(username)) {      // Check if the username is unique before adding it to the list.
        res.send('Username already exists. Please use another username.');
    } 
    else {
        userList.push(username);  // Add the new user to the list.
        res.redirect('/');
    }
});

module.exports = router;



// userlist.js file  (for storing the usernames)


// Create an array to store usernames on the server.
const userList = [];
module.exports = userList; 
