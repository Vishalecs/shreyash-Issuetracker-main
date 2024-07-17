const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/issue_Tracker');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database Successfully :: MongoDB');
});


module.exports = db;