$(document).ready(function() {

	var numQ = 10;
	var scoresArray = [];
	

	$("#submit").on("click", function(event) {

		event.preventDefault();
		// since there are 10 survey questions, start the loop at q1
		for(var i = 1; i <= numQ; i++) {
			// store each question's value into a new variable
			var scores = parseInt($("#q" + i).val());
			// push the scores into the empty scoresArray
			scoresArray.push(scores);
		}

		 // for (x = 0; x < scoresArray.length; x++) {

   //    		if (scoresArray[x] === 0) {

   //      		 validate = true;
   //    		}
   //  	}	
		
		// if the name and photo inputs have a value, and all questions have been answered
		if( $("#name").val() && $("#photo").val() ) {

			var newFriend = {

				name: $("#name").val().trim(),
				photo: $("#photo").val().trim(),
				scores: scoresArray
			};

			 // post to "/api/friends" 
      		$.post("/api/new", newFriend).done(function(data) {

      			if(data) {
	      			// log a successful submission 
	      			console.log("Your best match is...")
	      			console.log(data);

	      			alert("Adding friend to database!");
	      			// activate the modal 
	      			$("#imagemodal").modal("show");
	      			$("#result-name").html("<h3> My name is " + data.name + "</h3>");
	          		$("#imagepreview").attr("src", data.photo);
      			}
      			// Clear the form when submitting
	      		$("#name").val("");
	      		$("#photo").val("");
	      		$(".answers").val(0);	
      		});
		}
		else {
			alert("Please complete the form before submitting");
		}
	});
});