const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

// Middleware
app.use(express.static('./assets'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true })); // Use extended option for parsing URL-encoded bodies
app.use(express.json()); // Parse application/json requests

// EJS setup
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Routes
app.use('/', require('./routes'));

// Start server
app.listen(port, (err) => {
    if (err) {
        console.error("Error in running the server:", err);
        return;
    }
    console.log("Express server is up and running on port:", port);
});
