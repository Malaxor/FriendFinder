
// store into a variable the exported data found in the friends.js file
var dataFriends = require("../data/friends.js");

// export the APIs
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

		res.json(dataFriends);
	});

	app.post("api/new", function(req, res) {

		dataFriends.push(req.body);
		res.json(req.body);
	});
}