function makeRomanNumerals() {
	var initialArabic, 
	    tokens = { 1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I" }; 
	
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
