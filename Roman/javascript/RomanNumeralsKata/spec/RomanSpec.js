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
      { arabic: 20, numeral: 'XX'},
      { arabic: 21, numeral: 'XXI'},
      { arabic: 22, numeral: 'XXII'},
      { arabic: 23, numeral: 'XXIII'},
      { arabic: 24, numeral: 'XXIV'},
      { arabic: 25, numeral: 'XXV'},
      { arabic: 26, numeral: 'XXVI'},
      { arabic: 27, numeral: 'XXVII'},
      { arabic: 28, numeral: 'XXVIII'},
      { arabic: 29, numeral: 'XXIX'},
      { arabic: 30, numeral: 'XXX'},
      { arabic: 31, numeral: 'XXXI'},
      { arabic: 32, numeral: 'XXXII'},
      { arabic: 33, numeral: 'XXXIII'},
      { arabic: 34, numeral: 'XXXIV'},
      { arabic: 35, numeral: 'XXXV'},
      { arabic: 36, numeral: 'XXXVI'},
      { arabic: 37, numeral: 'XXXVII'},
      { arabic: 38, numeral: 'XXXVIII'},
      { arabic: 39, numeral: 'XXXIX'},
      { arabic: 40, numeral: 'XL'},
      { arabic: 41, numeral: 'XLI'},
      { arabic: 42, numeral: 'XLII'},
      { arabic: 43, numeral: 'XLIII'},
      { arabic: 44, numeral: 'XLIV'},
      { arabic: 45, numeral: 'XLV'},
      { arabic: 46, numeral: 'XLVI'},
      { arabic: 47, numeral: 'XLVII'},
      { arabic: 48, numeral: 'XLVIII'},
      { arabic: 49, numeral: 'XLIX'},
      { arabic: 50, numeral: 'L'}, 
      { arabic: 1934, numeral: 'MCMXXXIV'},
      { arabic: 3000, numeral: 'MMM'}
    ].forEach(function(testRoman) {it ("should return " + testRoman.numeral + " for arabic number " + testRoman.arabic, function() {
        expect(roman.numeral(testRoman.arabic)).toBe(testRoman.numeral);
      });
    });
  });
});
