function makeTennis() {
    var ballsPlayerOne = 0;
    var ballsPlayerTwo = 0;
    var scores = ['love', 'fifteen', 'twenty', 'thirty', 'forty'];

	function scoreIsEqual() {
		return ballsPlayerOne === ballsPlayerTwo;
	}

	function winningPlayer() {
		if (ballsPlayerOne > ballsPlayerTwo) {
			return 'player one';
		} else if (ballsPlayerOne < ballsPlayerTwo) {
			return 'player two';
		}
	}

	return function() {
		return {
			score: function() {
				if (ballsPlayerOne >= 4 && ballsPlayerTwo >= 4 && scoreIsEqual()) {
					return 'deuce';
				} else if (ballsPlayerOne >= 4 && ballsPlayerTwo >= 4) {
					return 'advantage ' + winningPlayer();
				} else {
					return scores[ballsPlayerOne] + ' - ' + scores[ballsPlayerTwo];
				}
			},
			game: function(playerOne, playerTwo) {
				ballsPlayerOne = playerOne;
				ballsPlayerTwo = playerTwo;
			}
		}
	}();
}