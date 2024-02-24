const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize= require('./util/database');
  
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to handle POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes
const routes = require('./routes/bookRoutes'); 
app.use('/', routes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('404: Not Found');
});

sequelize.sync()
  .then(result => {
    console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

