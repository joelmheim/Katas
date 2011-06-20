function makeRomanNumerals() {
	var initialArabic, 
	    tokens = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M" }; 
	
	function findToken(arabic, remainder) {
		var result, currentToken = tokens[arabic];
		if (currentToken) {
			remainder = initialArabic - arabic;
			return { token: currentToken, rest: remainder};
		}
		return findToken(arabic-1, remainder);
	}
	
	function computeRomanNumeral(arabic) {
		var i, romanNumeral = "";
		var result = findToken(arabic, 0);
		if (result.token) {
        		romanNumeral += result.token;
        }
        if (result.rest === 0) {
        	return romanNumeral;
        }
        initialArabic = result.rest;
        return romanNumeral += computeRomanNumeral(initialArabic); 
	}
	
	return function() {		
        return {
            numeral: function(arabic) {
            	initialArabic = arabic;
            	return computeRomanNumeral(arabic);
            }
	    }
    }();
}
