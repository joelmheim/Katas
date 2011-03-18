function Tennis() {
    this.ballsPlayerOne = 0;
    this.ballsPlayerTwo = 0;
}

Tennis.prototype.score = function() {
    if (this.ballsPlayerOne == 1) {
        return 'love - fifteen'
    } else if (this.ballsPlayerTwo == 1) {
        return 'fifteen - love'
    }
    return 'love - love'
}

Tennis.prototype.scorePlayerOne = function() {
    this.ballsPlayerOne++
}

Tennis.prototype.scorePlayerTwo = function() {
    this.ballsPlayerTwo++
}
