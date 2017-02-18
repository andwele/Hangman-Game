alert("PRESS ANY BUTTON TO BEGIN!");


var hangmanGame = {
	wins:0,
	movieOptions: ["Cars 2", "Brave", "Monsters University", "A Bug's Life", "Cars", 
	"The Good Dinosaur", "Monsters, Inc.", "Up", "Ratatouille", "Finding Dory", "Inside Out", 
	"Toy Story 3", "The Incredibles", "Toy Story 2", "Finding Nemo", "Toy Story", "WALL-E"],


	randomMovie: function() {
		var result = Math.floor(Math.random() * this.movieOptions.length);
		var movie = this.movieOptions[result];

		return result;
		console.log("Result of the index in the movie list: " + result);

		return movie;
		console.log("Random movie title: " + movie);

	},


	livesRemaining: 9,

	getTheId: function(element) {
		var theId = document.getElementById(element);
		return theId;
	},


	output: function(elMnt, valU) {
		this.theId(elMnt).textContent = valU;
	}

};



var movieChoice = hangmanGame.randomMovie();
hangmanGame.getTheId("randomMovie").textContent = movieChoice;



var numOfLetters = word.split(" ");
console.log("number of letters array: " + numOfLetters);



var replacedLetters = [];


numOfLetters.map(function(element) {
	var result = element.replacedLetters(element, "-");
	piece.push(result);
});


var lossOfLives = hangmanGame.livesRemaining;



document.onkeyup = function(event) {

	var alreadyTyped = document.createTextNode(event.key + ", ");
	hangmanGame.getTheId("Guessed").appendChild(alreadyTyped);



	numOfLetters.map(function(element, index) {

		if (element === event.key) {

			piece[index] = element;

		}

		else {

			alert("Keep trying!");

		}

	});




};
