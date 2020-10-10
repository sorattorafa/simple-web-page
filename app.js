 const express = require('express'); // express 
const faker = require('faker'); // faker
var bodyParser  = require("body-parser"); // bodyParser   
const peoplesRouter = require('./routes/peoples-routes'); // require routes 
const usersRouter = require('./routes/users-routes'); // require routes 

const app = express(); // start app 

app.set("view engine", "ejs");  // set views
app.use(bodyParser.urlencoded({extended: true})); // app use body parser
app.use(express.static(__dirname +  "/public")); // dirname

const mysql = require('mysql'); // sql 

// create connection with sql     
const connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root',   
  password : 'password',  // your root username
  database : 'join_us'   // the name of your db
}); 
 
// listen on port 8080
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});   

// set app Routes
peoplesRouter(app, connection);
usersRouter(app, connection);
