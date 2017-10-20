
// DEPENDENCIES
var path = require("path");

// HTML Routes ready for export
module.exports = function(app) {
	// the home page (an html document found the public folder) will be rendered when the url looks like: localhost:800"/"
	app.get("/", function(req, res) {

		res.sendFile(path.join(__dirname, "../public/home.html"));
	});	
	// similar to the function above
	app.get("/survey", function(req, res) {

		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
}
