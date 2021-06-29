/**
 *	Evaluates if a number is even or not
 *
 *	@function	isEven
 *	@param		number num
 *	@return		boolean
 */



var input_num =prompt("enter an odd or even number");

function isEven(num) {

	return num % 2 == 0;
}


//console.log(isEven(input_num));
var result =isEven(input_num);

if (isNaN(input_num)){
		
		alert("not a number");

		}else{

			if (result){
				alert("it's even");
			}else{
			alert("it's NOT even");
		}
}
