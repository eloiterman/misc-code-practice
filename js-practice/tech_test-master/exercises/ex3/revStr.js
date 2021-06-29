/**
 *	Reverses all the characters in a string,
 *	first and last characters swap position and so on
 *
 *	@function	revStr
 *	@param		string str
 *	@return		string
 */




function revStr(str) {
	return str.split("").reverse().join("");
}


console.log(revStr("superman") );
