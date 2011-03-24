function Tennis() {
    this.ballsPlayerOne = 0;
    this.ballsPlayerTwo = 0;
    this.scores = ['love', 'fifteen', 'twenty', 'thirty', 'forty'];

    Tennis.prototype.scoreIsEqual = function() {
        return this.ballsPlayerOne === this.ballsPlayerTwo;
    }

    Tennis.prototype.winningPlayer = function() {
        if (this.ballsPlayerOne > this.ballsPlayerTwo) {
            return 'player one';
        } else if (this.ballsPlayerOne < this.ballsPlayerTwo) {
            return 'player two';
        }
    }

    Tennis.prototype.score = function() {
        if (this.ballsPlayerOne >= 4 && this.ballsPlayerTwo >= 4 && this.scoreIsEqual()) {
            return 'deuce';
        } else if (this.ballsPlayerOne >= 4 && this.ballsPlayerTwo >= 4) {
            return 'advantage ' + this.winningPlayer();
        } else {
            return this.scores[this.ballsPlayerOne] + ' - ' + this.scores[this.ballsPlayerTwo];
        }
    }

    Tennis.prototype.game = function(playerOne, playerTwo) {
        this.ballsPlayerOne = playerOne;
        this.ballsPlayerTwo = playerTwo;
    }

}