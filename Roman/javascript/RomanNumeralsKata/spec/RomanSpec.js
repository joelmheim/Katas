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
      { arabic: 5, numeral: 'V'}
    ].forEach(function(testRoman) {it ("should return " + testRoman.numeral + " for arabic number " + testRoman.arabic, function() {
        expect(roman.numeral(testRoman.arabic)).toBe(testRoman.numeral);
      });
    });
  });
});
