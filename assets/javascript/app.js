// user does nothing but click on the answer radio buttons, all else should go using functions and timers

$(document).ready(function() {

// __________________________________
// ** Variables **

	//remainingTime 
	var timer = 

	// var for right answers

	// var for questions

	// var for wrong answers

	// empty array for right answers

	// empty array for wrong answers

	// unanswered questions?

// __________________________________
// ** Functions **

	// on document loading, start timer


	// what happens when a radio button is clicked, store the information

	// timeup

	// show stored answers as how many were 1: correct, 2: how many were incorrect, and 3: how many were not answered

		// push right answers to right array

		// push wrong answers to wrong array

		// how to record unanswered questions? if not aswered, push to unanswered quetion array?

	// function timeUp() {

	//         // in the element with an id of time-left add an h2 saying Time's Up!
	//         // console log done
	//          $("#remainingTime").append("<h2>your time is up!</h2>");
//		}
	
	//car and animal gifs on rotating loop
// __________________________________
// ** Game Logic **

	// start timer()
	setTimeout(thirtySeconds, 30 * 1000);
	$("#remainingTime").append("remaining time: " + thirtySeconds);
	console.log(setTimeout);


	// timeUp()

// ----------------------------------
}); //end document ready
