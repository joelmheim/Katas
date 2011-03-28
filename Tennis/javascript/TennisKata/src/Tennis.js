Number.prototype.times = function(block) {
    for(var i = 0; i<this; i++) {
        block();
    }
}

function makeTennis() {
    var ballsPlayerOne = 0;
    var ballsPlayerTwo = 0;
    var scores = ['love', 'fifteen', 'thirty', 'forty'];

    function scorePlayerOne() {
        ballsPlayerOne++;
    }

    function scorePlayerTwo() {
        ballsPlayerTwo++;
    }

    function scoreIsEqual() {
        return ballsPlayerOne === ballsPlayerTwo;
    }

    function onePlayerHasForty() {
        return ballsPlayerOne >= 3 || ballsPlayerTwo >= 3;
    }

    function bothPlayersHaveForty() {
        return ballsPlayerOne >= 3 && ballsPlayerTwo >= 3;
    }

    function leadingPlayerLeadsByTwo() {
        return (ballsPlayerOne-2 >= ballsPlayerTwo || ballsPlayerOne <= ballsPlayerTwo-2)
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
                if (onePlayerHasForty() && leadingPlayerLeadsByTwo()) {
                    return 'game ' + winningPlayer();
                } else if (bothPlayersHaveForty() && scoreIsEqual()) {
                    return 'deuce';
                } else if (bothPlayersHaveForty()) {
                    return 'advantage ' + winningPlayer();
                } else {
                    return scores[ballsPlayerOne] + ' - ' + scores[ballsPlayerTwo];
                }
            },
	        game: function(playerOne, playerTwo) {
                playerOne.times(scorePlayerOne);
                playerTwo.times(scorePlayerTwo);
            }
	    }
    }();
}