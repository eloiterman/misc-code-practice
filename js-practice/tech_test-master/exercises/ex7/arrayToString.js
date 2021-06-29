/*
 *	Joins all string elements from an array to one string, excluding the last node of the array
 *
 *	@function	arrayToString
 *	@param		array arr
 *	@return 	string
 */

var putItTogether = ["monty","python's","flying","circus",42,19]

function arrayToString(arr) {

return arr.toString().split(",");
	
}

var niceString=arrayToString(putItTogether);
document.write(niceString);
console.log(arrayToString(putItTogether));