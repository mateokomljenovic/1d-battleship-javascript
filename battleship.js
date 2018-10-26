//First of, I have to declare three variables. 
var randomLocation = parseInt(Math.floor(Math.random() * 5));
var location1 = randomLocation;
var location2 = randomLocation + 1;
var location3 = location2 + 1;
//Then I have to create variables for guess, hits and guesses and set it to zero
var guess;
var hits = 0;
var guesses = 0;
//Set the variable isSunk to false because our simple battleship is not sunk YET! :)
var isSunk = false;
//1.STEP: Set the loop, get the input and validate the result
while (isSunk == false) {
	guess = prompt("Ready? Aim! FIRE! (enter a number 0-6):"); //Get the number
	  if (guess < 0 || guess > 6) {
	  	alert("Seriously, mate? Enter the valid number. From 0 to 6.");
	  } else {
	  	  guesses = guesses + 1; 

	      if ( guess == location1 || guess == location2 || guess == location3 ) { //I've changed else if with OR
	    	   alert("OUCH! You hit me!");
	    	   hits = hits + 1;   
	           if (hits == 3) {
	    	   isSunk = true; 
	    	   alert ("You sank my battleship!"); //Damn be YOU! :P
	    }
	  } else {
	  	alert("HAHA,You've missed me");
	  }
	}
}
var stats = "You shoot" + guesses + " times to sink my battleship, " + "which means your shooting accuracy was " + (3/guesses);
parseInt(alert(stats));