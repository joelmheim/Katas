function makeRomanNumerals() {
	var tokens = { 1: "I", 4: "IV", 5: "V" }; 
	
	function findToken(arabic, remainder) {
		var result, currentToken = tokens[arabic];
		if (currentToken) {
			return { token: currentToken, rest: remainder};
		} else {
			remainder += 1;
			return findToken(arabic-1, remainder);
		}
	}
	
	function computeRomanNumeral(arabic) {
		var i, romanNumeral = "";
		var result = findToken(arabic, 0);
		if (result.rest === 0) {
        	romanNumeral = result.token;
        } else {
           	for (i=0; i < result.rest + 1; i++ ){
            	romanNumeral += result.token;
            } 
		}
		return romanNumeral;
	}
	
	return function() {		
        return {
            numeral: function(arabic) {
            	return computeRomanNumeral(arabic);
            }
	    }
    }();
}
