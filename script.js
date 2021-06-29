var userChoice = prompt("do you chose rock, paper, or scissors?")
userChoice = userChoice.toLowerCase();
if (userChoice == 'rock') {
	document.write('You picked ' + userChoice + '<br / >');
	} else if (userChoice == 'paper') {
		document.write('You picked ' + userChoice + '<br/>');
	} else if (userChoice =='scissors') {
		document.write('You picked ' + userChoice + '<br />');
	} else {
		document.write('You did not pick anything <br />');	
	};
	let computerPick = Math.random();
	let computerChoice = '';
	if (computerPick < 0.34) {
		computerChoice = 'rock';
	} else if (computerPick <= 0.67) {
		computerChoice = 'paper';
	} else {
		computerChoice = 'scissors';
	}
	document.write('Computer choice: ' + computerChoice + '<br />');
		
var compare = function(choice1, choice2 ){
	if (choice1 == choice2) {
		return 'It is a tie game' ;
		
	}
	if (choice1 == 'rock') {
		if (choice2 == 'paper'){
			return 'Oh Noes! The computer won...';
	} else {
		return 'YOU WON!'
		}
	}

	if (choice1 == 'scissors') {
		if (choice2 == 'rock'){
			return 'Oh Noes! The computer won...';
	} else {
		return 'YOU WON!'
		}
	}

	if (choice1 == 'paper') {
		if (choice2 == 'scissors'){
			return 'Oh Noes! The computer won...';
	} else {
		return 'YOU WON!'
		}
	}
}	
	var winner = compare(userChoice, computerChoice);
	document.write('Result: ' + winner);
