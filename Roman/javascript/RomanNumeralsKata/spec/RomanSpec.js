describe("RomanNumerals", function() {
  var roman;

  beforeEach(function() {
    roman = makeRomanNumerals();
  });

  describe("arabic to roman", function() {
    [
      { arabic: 1, numeral: 'I' },
      { arabic: 2, numeral: 'II' },
      { arabic: 3, numeral: 'III' },
      { arabic: 4, numeral: 'IV' },
      { arabic: 5, numeral: 'V' },
      { arabic: 6, numeral: 'VI' },
      { arabic: 7, numeral: 'VII' }, 
      { arabic: 8, numeral: 'VIII' },
      { arabic: 9, numeral: 'IX' },
      { arabic: 10, numeral: 'X'},
      { arabic: 11, numeral: 'XI'},
      { arabic: 12, numeral: 'XII'},
      { arabic: 13, numeral: 'XIII'},
      { arabic: 14, numeral: 'XIV'},
      { arabic: 15, numeral: 'XV'},
      { arabic: 16, numeral: 'XVI'},
      { arabic: 17, numeral: 'XVII'},
      { arabic: 18, numeral: 'XVIII'},
      { arabic: 19, numeral: 'XIX'},
      { arabic: 20, numeral: 'XX'}
    ].forEach(function(testRoman) {it ("should return " + testRoman.numeral + " for arabic number " + testRoman.arabic, function() {
        expect(roman.numeral(testRoman.arabic)).toBe(testRoman.numeral);
      });
    });
  });
  
  describe("find correct token", function() {
  	[
  		{ arabic: 1, expectedToken: 'I', expectedRest: 0},
  		{ arabic: 2, expectedToken: 'I', expectedRest: 1},
  		{ arabic: 3, expectedToken: 'I', expectedRest: 2},
  		{ arabic: 4, expectedToken: 'IV', expectedRest: 0},
  		{ arabic: 5, expectedToken: 'V', expectedRest: 0},
  		{ arabic: 6, expectedToken: 'V', expectedRest: 1}
  	].forEach(function(testInput) { it("should return " + testInput.expectedToken + ", and remainder of " + testInput.expectedRest + " for arabic number " + testInput.arabic, function() {
  		var expectedResult = roman.testToken(testInput.arabic);
  		expect(expectedResult.token).toBe(testInput.expectedToken);
  		expect(expectedResult.rest).toBe(testInput.expectedRest);
  	  });
    });
  });
});
