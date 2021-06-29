/**
 *	Evaluates if a number is prime or not
 *
 *	@function	isPrime
 *	@param		number num
 *	@return		boolean
 */
var input_num =prompt("enter a number and I'll tell you if it's prime");
function isPrime(num) {
	
 for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;

}
var result =isPrime(input_num);

//without the propt btw:
//console.log( isPrime(5)); //simplest 

if (isNaN(input_num)){
		
		alert("not a number");

	}else{


			if(result){
				alert("Prime");
			}else{
				alert("Not Prime");
			}


}

//with text input it will return true oddly enough 
console.log(result);


