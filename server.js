require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//requiring models for db.sequelize.sync()
var db = require("./models");
var PORT = process.env.PORT || 3000;

//set up server
var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// setting up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//to be able to use different methods than html allows
app.use(methodOverride('_method'));

// Import routes and give the server access to them
var routes = require("./routes/html-routes.js");
app.use(routes);

//added the db require for models and sync with promise
db.sequelize.sync().then(function(){
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
});