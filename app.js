/* jshint esnext: true */

var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var dbConfig = require('./db/db.config.js');
var mongoose = require('mongoose');
//const mongoose = require('mongodb').MongoClient;

 mongoose.Promise = global.Promise;


 mongoose.connect(dbConfig.url) /*, {
    useNewUrlParser: true
}) .then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});  */

require('./routes/routes.js')(app);

app.listen(3000,()=>{
    console.log('Server is listening on port 3000....');
})