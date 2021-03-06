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
	  { arabic: 51, numeral: 'LI'}, 
      { arabic: 52, numeral: 'LII'}, 
   	  { arabic: 53, numeral: 'LIII'}, 
   	  { arabic: 54, numeral: 'LIV'}, 
   	  { arabic: 55, numeral: 'LV'}, 
   	  { arabic: 56, numeral: 'LVI'}, 
   	  { arabic: 57, numeral: 'LVII'}, 
   	  { arabic: 58, numeral: 'LVIII'}, 
   	  { arabic: 59, numeral: 'LIX'}, 
   	  { arabic: 60, numeral: 'LX'}, 
   	  { arabic: 61, numeral: 'LXI'}, 
   	  { arabic: 62, numeral: 'LXII'}, 
   	  { arabic: 63, numeral: 'LXIII'}, 
   	  { arabic: 64, numeral: 'LXIV'}, 
   	  { arabic: 65, numeral: 'LXV'}, 
   	  { arabic: 66, numeral: 'LXVI'}, 
   	  { arabic: 67, numeral: 'LXVII'}, 
   	  { arabic: 68, numeral: 'LXVIII'}, 
   	  { arabic: 69, numeral: 'LXIX'}, 
   	  { arabic: 70, numeral: 'LXX'}, 
   	  { arabic: 71, numeral: 'LXXI'}, 
   	  { arabic: 72, numeral: 'LXXII'}, 
   	  { arabic: 73, numeral: 'LXXIII'}, 
   	  { arabic: 74, numeral: 'LXXIV'}, 
   	  { arabic: 75, numeral: 'LXXV'}, 
   	  { arabic: 76, numeral: 'LXXVI'}, 
   	  { arabic: 77, numeral: 'LXXVII'}, 
   	  { arabic: 78, numeral: 'LXXVIII'}, 
   	  { arabic: 79, numeral: 'LXXIX'}, 
   	  { arabic: 80, numeral: 'LXXX'}, 
   	  { arabic: 81, numeral: 'LXXXI'}, 
   	  { arabic: 82, numeral: 'LXXXII'}, 
   	  { arabic: 83, numeral: 'LXXXIII'}, 
   	  { arabic: 84, numeral: 'LXXXIV'}, 
   	  { arabic: 85, numeral: 'LXXXV'}, 
   	  { arabic: 86, numeral: 'LXXXVI'}, 
   	  { arabic: 87, numeral: 'LXXXVII'}, 
   	  { arabic: 88, numeral: 'LXXXVIII'}, 
   	  { arabic: 89, numeral: 'LXXXIX'}, 
   	  { arabic: 90, numeral: 'XC'}, 
   	  { arabic: 91, numeral: 'XCI'}, 
   	  { arabic: 92, numeral: 'XCII'}, 
   	  { arabic: 93, numeral: 'XCIII'}, 
   	  { arabic: 94, numeral: 'XCIV'}, 
   	  { arabic: 95, numeral: 'XCV'}, 
   	  { arabic: 96, numeral: 'XCVI'}, 
   	  { arabic: 97, numeral: 'XCVII'}, 
   	  { arabic: 98, numeral: 'XCVIII'}, 
   	  { arabic: 99, numeral: 'XCIX'}, 
   	  { arabic: 100, numeral: 'C'}, 
   	  { arabic: 101, numeral: 'CI'}, 
   	  { arabic: 102, numeral: 'CII'}, 
   	  { arabic: 103, numeral: 'CIII'}, 
   	  { arabic: 104, numeral: 'CIV'}, 
   	  { arabic: 105, numeral: 'CV'}, 
   	  { arabic: 106, numeral: 'CVI'}, 
   	  { arabic: 107, numeral: 'CVII'}, 
   	  { arabic: 108, numeral: 'CVIII'}, 
   	  { arabic: 109, numeral: 'CIX'}, 
   	  { arabic: 110, numeral: 'CX'}, 
   	  { arabic: 111, numeral: 'CXI'}, 
   	  { arabic: 112, numeral: 'CXII'}, 
   	  { arabic: 113, numeral: 'CXIII'}, 
   	  { arabic: 114, numeral: 'CXIV'}, 
   	  { arabic: 115, numeral: 'CXV'}, 
   	  { arabic: 116, numeral: 'CXVI'}, 
   	  { arabic: 117, numeral: 'CXVII'}, 
   	  { arabic: 118, numeral: 'CXVIII'}, 
   	  { arabic: 119, numeral: 'CXIX'}, 
   	  { arabic: 120, numeral: 'CXX'}, 
   	  { arabic: 121, numeral: 'CXXI'}, 
   	  { arabic: 122, numeral: 'CXXII'}, 
   	  { arabic: 123, numeral: 'CXXIII'}, 
   	  { arabic: 124, numeral: 'CXXIV'}, 
   	  { arabic: 125, numeral: 'CXXV'}, 
   	  { arabic: 126, numeral: 'CXXVI'}, 
   	  { arabic: 127, numeral: 'CXXVII'}, 
   	  { arabic: 128, numeral: 'CXXVIII'}, 
   	  { arabic: 129, numeral: 'CXXIX'}, 
   	  { arabic: 130, numeral: 'CXXX'}, 
   	  { arabic: 131, numeral: 'CXXXI'}, 
   	  { arabic: 132, numeral: 'CXXXII'}, 
   	  { arabic: 133, numeral: 'CXXXIII'}, 
   	  { arabic: 134, numeral: 'CXXXIV'}, 
   	  { arabic: 135, numeral: 'CXXXV'}, 
   	  { arabic: 136, numeral: 'CXXXVI'}, 
   	  { arabic: 137, numeral: 'CXXXVII'}, 
   	  { arabic: 138, numeral: 'CXXXVIII'}, 
   	  { arabic: 139, numeral: 'CXXXIX'}, 
   	  { arabic: 140, numeral: 'CXL'}, 
   	  { arabic: 141, numeral: 'CXLI'}, 
   	  { arabic: 142, numeral: 'CXLII'}, 
   	  { arabic: 143, numeral: 'CXLIII'}, 
   	  { arabic: 144, numeral: 'CXLIV'}, 
   	  { arabic: 145, numeral: 'CXLV'}, 
   	  { arabic: 146, numeral: 'CXLVI'}, 
   	  { arabic: 147, numeral: 'CXLVII'}, 
   	  { arabic: 148, numeral: 'CXLVIII'}, 
   	  { arabic: 149, numeral: 'CXLIX'}, 
   	  { arabic: 150, numeral: 'CL'}, 
   	  { arabic: 151, numeral: 'CLI'}, 
   	  { arabic: 152, numeral: 'CLII'}, 
   	  { arabic: 153, numeral: 'CLIII'}, 
   	  { arabic: 154, numeral: 'CLIV'}, 
   	  { arabic: 155, numeral: 'CLV'}, 
   	  { arabic: 156, numeral: 'CLVI'}, 
   	  { arabic: 157, numeral: 'CLVII'}, 
   	  { arabic: 158, numeral: 'CLVIII'}, 
   	  { arabic: 159, numeral: 'CLIX'}, 
   	  { arabic: 160, numeral: 'CLX'}, 
   	  { arabic: 161, numeral: 'CLXI'}, 
   	  { arabic: 162, numeral: 'CLXII'}, 
   	  { arabic: 163, numeral: 'CLXIII'}, 
   	  { arabic: 164, numeral: 'CLXIV'}, 
   	  { arabic: 165, numeral: 'CLXV'}, 
   	  { arabic: 166, numeral: 'CLXVI'}, 
   	  { arabic: 167, numeral: 'CLXVII'}, 
   	  { arabic: 168, numeral: 'CLXVIII'}, 
   	  { arabic: 169, numeral: 'CLXIX'}, 
   	  { arabic: 170, numeral: 'CLXX'}, 
   	  { arabic: 171, numeral: 'CLXXI'}, 
   	  { arabic: 172, numeral: 'CLXXII'}, 
   	  { arabic: 173, numeral: 'CLXXIII'}, 
   	  { arabic: 174, numeral: 'CLXXIV'}, 
   	  { arabic: 175, numeral: 'CLXXV'}, 
   	  { arabic: 176, numeral: 'CLXXVI'}, 
   	  { arabic: 177, numeral: 'CLXXVII'}, 
   	  { arabic: 178, numeral: 'CLXXVIII'}, 
   	  { arabic: 179, numeral: 'CLXXIX'}, 
   	  { arabic: 180, numeral: 'CLXXX'}, 
   	  { arabic: 181, numeral: 'CLXXXI'}, 
   	  { arabic: 182, numeral: 'CLXXXII'}, 
   	  { arabic: 183, numeral: 'CLXXXIII'}, 
   	  { arabic: 184, numeral: 'CLXXXIV'}, 
   	  { arabic: 185, numeral: 'CLXXXV'}, 
   	  { arabic: 186, numeral: 'CLXXXVI'}, 
   	  { arabic: 187, numeral: 'CLXXXVII'}, 
   	  { arabic: 188, numeral: 'CLXXXVIII'}, 
   	  { arabic: 189, numeral: 'CLXXXIX'}, 
   	  { arabic: 190, numeral: 'CXC'}, 
   	  { arabic: 191, numeral: 'CXCI'}, 
   	  { arabic: 192, numeral: 'CXCII'}, 
   	  { arabic: 193, numeral: 'CXCIII'}, 
   	  { arabic: 194, numeral: 'CXCIV'}, 
   	  { arabic: 195, numeral: 'CXCV'}, 
   	  { arabic: 196, numeral: 'CXCVI'}, 
   	  { arabic: 197, numeral: 'CXCVII'}, 
   	  { arabic: 198, numeral: 'CXCVIII'}, 
   	  { arabic: 199, numeral: 'CXCIX'}, 
   	  { arabic: 200, numeral: 'CC'}, 
   	  { arabic: 210, numeral: 'CCX'}, 
   	  { arabic: 220, numeral: 'CCXX'}, 
   	  { arabic: 230, numeral: 'CCXXX'}, 
   	  { arabic: 240, numeral: 'CCXL'}, 
   	  { arabic: 250, numeral: 'CCL'}, 
   	  { arabic: 260, numeral: 'CCLX'}, 
   	  { arabic: 270, numeral: 'CCLXX'}, 
   	  { arabic: 280, numeral: 'CCLXXX'}, 
   	  { arabic: 290, numeral: 'CCXC'}, 
   	  { arabic: 300, numeral: 'CCC'}, 
   	  { arabic: 310, numeral: 'CCCX'}, 
   	  { arabic: 320, numeral: 'CCCXX'}, 
   	  { arabic: 330, numeral: 'CCCXXX'}, 
   	  { arabic: 340, numeral: 'CCCXL'}, 
   	  { arabic: 350, numeral: 'CCCL'}, 
   	  { arabic: 360, numeral: 'CCCLX'}, 
   	  { arabic: 370, numeral: 'CCCLXX'}, 
   	  { arabic: 380, numeral: 'CCCLXXX'}, 
   	  { arabic: 390, numeral: 'CCCXC'}, 
   	  { arabic: 400, numeral: 'CD'}, 
   	  { arabic: 410, numeral: 'CDX'}, 
   	  { arabic: 420, numeral: 'CDXX'}, 
   	  { arabic: 430, numeral: 'CDXXX'}, 
   	  { arabic: 440, numeral: 'CDXL'}, 
   	  { arabic: 450, numeral: 'CDL'}, 
   	  { arabic: 460, numeral: 'CDLX'}, 
   	  { arabic: 470, numeral: 'CDLXX'}, 
   	  { arabic: 480, numeral: 'CDLXXX'}, 
   	  { arabic: 490, numeral: 'CDXC'}, 
   	  { arabic: 500, numeral: 'D'}, 
   	  { arabic: 600, numeral: 'DC'}, 
   	  { arabic: 700, numeral: 'DCC'}, 
   	  { arabic: 800, numeral: 'DCCC'}, 
   	  { arabic: 900, numeral: 'CM'}, 
   	  { arabic: 1000, numeral: 'M'}, 
   	  { arabic: 1100, numeral: 'MC'}, 
   	  { arabic: 1200, numeral: 'MCC'}, 
   	  { arabic: 1300, numeral: 'MCCC'}, 
   	  { arabic: 1400, numeral: 'MCD'}, 
   	  { arabic: 1500, numeral: 'MD'}, 
   	  { arabic: 1600, numeral: 'MDC'}, 
   	  { arabic: 1700, numeral: 'MDCC'}, 
   	  { arabic: 1800, numeral: 'MDCCC'}, 
   	  { arabic: 1900, numeral: 'MCM'}, 
   	  { arabic: 1934, numeral: 'MCMXXXIV'},
      { arabic: 1973, numeral: 'MCMLXXIII'},
      { arabic: 2000, numeral: 'MM'}, 
   	  { arabic: 2100, numeral: 'MMC'}, 
   	  { arabic: 2200, numeral: 'MMCC'}, 
   	  { arabic: 2300, numeral: 'MMCCC'}, 
   	  { arabic: 2400, numeral: 'MMCD'}, 
   	  { arabic: 2500, numeral: 'MMD'}, 
   	  { arabic: 2600, numeral: 'MMDC'}, 
   	  { arabic: 2700, numeral: 'MMDCC'}, 
   	  { arabic: 2800, numeral: 'MMDCCC'}, 
   	  { arabic: 2900, numeral: 'MMCM'}, 
   	  { arabic: 3000, numeral: 'MMM'},
	  { arabic: 3100, numeral: 'MMMC'},
	  { arabic: 3200, numeral: 'MMMCC'},
	  { arabic: 3300, numeral: 'MMMCCC'},
	  { arabic: 3400, numeral: 'MMMCD'},
	  { arabic: 3500, numeral: 'MMMD'},
	  { arabic: 3600, numeral: 'MMMDC'},
	  { arabic: 3700, numeral: 'MMMDCC'},
	  { arabic: 3800, numeral: 'MMMDCCC'},
	  { arabic: 3900, numeral: 'MMMCM'},
	  { arabic: 3997, numeral: 'MMMCMXCVII'}
	  //{ arabic: 3998, numeral: 'MMMCMXCVIII'}
	  //{ arabic: 3999, numeral: 'MMMCMXCIX'}
    ].forEach(function(testRoman) {it ("should return " + testRoman.numeral + " for arabic number " + testRoman.arabic, function() {
        expect(roman.numeral(testRoman.arabic)).toBe(testRoman.numeral);
      });
    });
  });
});
