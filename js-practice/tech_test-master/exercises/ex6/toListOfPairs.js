/*
 *	Convert an object into a list of [key, value] pairs, behaving as Object.entries()
 *	Function entries is forbidden
 *
 *	@function	toListOfPairs
 *	@param		object obj
 *	@return 	array
 */
var person =[
            {"firstName":"Evan"},
            {"lastName":"Loiterman"},
            {"superpower":"patience"},
            {"actions":"coding"},
           
        ];

function toListOfPairs(obj) {
	 for(var i of obj) {
            var key = Object.keys(i).toString();
            console.log(i,'=',i[key]);
        }
}
       

toListOfPairs(person);