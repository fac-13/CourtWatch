const mongoose = require('mongoose');

require('dotenv').config(); 

if (!process.env.DATABASE_URL) {
  throw new Error('Environment variable DATABASE_URL should be set');
}

mongoose.connect(process.env.DATABASE_URL); 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("Database connected"); 
});