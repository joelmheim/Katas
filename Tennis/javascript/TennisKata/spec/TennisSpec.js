describe("Tennis", function() {
  var tennis;

  beforeEach(function() {
    tennis = makeTennis();
  });

  describe("regular match", function() {
    [
      {playerOne: 0, playerTwo: 0, result: 'love - love' },
      {playerOne: 0, playerTwo: 1, result: 'love - fifteen' },
      {playerOne: 1, playerTwo: 0, result: 'fifteen - love' },
      {playerOne: 1, playerTwo: 1, result: 'fifteen - fifteen' },
      {playerOne: 1, playerTwo: 2, result: 'fifteen - thirty' },
      {playerOne: 2, playerTwo: 1, result: 'thirty - fifteen' },
      {playerOne: 2, playerTwo: 2, result: 'thirty - thirty' },
      {playerOne: 3, playerTwo: 2, result: 'forty - thirty' },
      {playerOne: 2, playerTwo: 3, result: 'thirty - forty' }
    ].forEach(function(testGame) {it ("should return " + testGame.result + " when score is " + testGame.playerOne + " - " + testGame.playerTwo, function() {
        tennis.game(testGame.playerOne, testGame.playerTwo);
        expect(tennis.score()).toBe(testGame.result);
      });
    });
  });

  describe("deuce", function() {
    [
      {playerOne: 3, playerTwo: 3, result: 'deuce'},
      {playerOne: 4, playerTwo: 4, result: 'deuce'},
      {playerOne: 5, playerTwo: 5, result: 'deuce'},
      {playerOne: 6, playerTwo: 6, result: 'deuce'},
      {playerOne: 7, playerTwo: 7, result: 'deuce'},
      {playerOne: 8, playerTwo: 8, result: 'deuce'},
      {playerOne: 9, playerTwo: 9, result: 'deuce'},
      {playerOne: 10, playerTwo: 10, result: 'deuce'}
    ].forEach(function(testGame) {it ("should return " + testGame.result + " when score is " + testGame.playerOne + " - " + testGame.playerTwo, function() {
        tennis.game(testGame.playerOne, testGame.playerTwo);
        expect(tennis.score()).toBe(testGame.result);
      });
    });
  });

  describe("advantage", function() {
    [
      {playerOne: 4, playerTwo: 3, result: 'advantage player one'},
      {playerOne: 3, playerTwo: 4, result: 'advantage player two'},
      {playerOne: 5, playerTwo: 4, result: 'advantage player one'},
      {playerOne: 4, playerTwo: 5, result: 'advantage player two'},
      {playerOne: 6, playerTwo: 5, result: 'advantage player one'},
      {playerOne: 5, playerTwo: 6, result: 'advantage player two'},
      {playerOne: 7, playerTwo: 6, result: 'advantage player one'},
      {playerOne: 6, playerTwo: 7, result: 'advantage player two'},
      {playerOne: 8, playerTwo: 7, result: 'advantage player one'},
      {playerOne: 7, playerTwo: 8, result: 'advantage player two'}
    ].forEach(function(testGame) {it ("should return " + testGame.result + " when score is " + testGame.playerOne + " - " + testGame.playerTwo, function() {
        tennis.game(testGame.playerOne, testGame.playerTwo);
        expect(tennis.score()).toBe(testGame.result);
      });
    });
  });

  describe("winning", function() {
    [
      {playerOne: 4, playerTwo: 0, result: 'game player one'},
      {playerOne: 0, playerTwo: 4, result: 'game player two'}
    ].forEach(function(testGame) {it ("should return " + testGame.result + " when score is " + testGame.playerOne + " - " + testGame.playerTwo, function() {
        tennis.game(testGame.playerOne, testGame.playerTwo);
        expect(tennis.score()).toBe(testGame.result);
      });
    });
  });
});