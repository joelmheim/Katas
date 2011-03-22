function Tennis() {
    this.ballsPlayerOne = 0;
    this.ballsPlayerTwo = 0;
    this.scores = ['love', 'fifteen']

    Number.prototype.times = function(obj, fun) {
        alert(typeof fun)
        if (this > 0) {
            for(i=0; i<this; i++) {
                obj.call(fun())
            }
        }
    }

    Tennis.prototype.score = function() {
        return this.scores[this.ballsPlayerOne] + ' - ' + this.scores[this.ballsPlayerTwo]
    }

    Tennis.prototype.scorePlayerOne = function() {
        this.ballsPlayerOne++
    }

    Tennis.prototype.scorePlayerTwo = function() {
        this.ballsPlayerTwo++
    }

    Tennis.prototype.game = function(playerOne, playerTwo) {
//        playerOne.times(this, Tennis.prototype.scorePlayerOne())
//    playerTwo.times(this.scorePlayerTwo())
        for(i=0; i<playerOne; i++) {
          this.scorePlayerOne()
        }
        for(j=0; j<playerTwo; j++) {
            this.scorePlayerTwo()
        }
    }

}