
// store into a variable the exported data found in the friends.js file
var dataFriends = require("../data/friends.js");

// export the APIs
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {

		res.json(dataFriends);
	});

	app.post("/api/new", function(req, res) {

		var newPerson = req.body;
		var newScores = req.body.scores;
		// this array will contain all the calculated differences
		var totalDiff = [];
			
		// loop through the buddies array
		for(var a = 0; a < dataFriends.length; a++) {

			var total = 0;	
			// a nested for-loop is needed to iterate through all of the buddies' scores
			for(var b = 0; b < newScores.length; b++) {
				// subtract the newest respondent's scores from everyones' in the internetFaces array
				var diff = Math.abs(newScores[b] - dataFriends[a].scores[b]);
				// add the differences 
				total += diff;
			}
			// after the responden's scores were compared with everyone elses, push the results into the totalDiff array
			totalDiff.push(total);
		}
		// this method will exctact the smallest number from the totalDiff array
		var minDiff = Math.min.apply(0, totalDiff);
		// locate the smallest number's index
		var idx = totalDiff.indexOf(minDiff);
		// the array bellow will contain the indexes of all the recurring numbers within the total
		var indexes = [];
		// run a while loop to push all indexes of recurring numbers into the indexes array
		while(idx !== -1) {

			indexes.push(idx);
			idx = totalDiff.indexOf(minDiff, idx + 1);
		}
		// generate a random index within the indexes array
		var random = Math.floor(Math.random() * indexes.length);
		// find the random indexe's value
		var value = indexes[random];
		// pushing the newly added friend at the end excludes him/her from being taken into account when comparing scores
		dataFriends.push(newPerson);
		res.json(dataFriends[value]);
	});
}