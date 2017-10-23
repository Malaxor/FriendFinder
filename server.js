// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create the express app
var app = express();
// heroku assigned port number and local port number
var PORT = process.env.PORT || 3000;

// midleware to link to static pages
app.use(express.static(path.join(__dirname, "app/public")));

// configure express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// routers
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// start the server
app.listen(PORT, function() {

	console.log("app listening on PORT " + PORT);
});
