/**
 *	Evaluates if a given object has a given property
 *	Function hasOwnProperty is forbidden
 *
 *	@function	hasProperty
 *	@param		object obj
  *	@param		string propertyName
 *	@return		boolean
 */
var person = {
    firstName:"Evan",
    lastName:"Loiterman",


};

var MyProps = person.lastName;

function hasProperty(obj, propertyName) {

alert(obj +" " + propertyName )

	if (typeof propertyName !== 'undefined') {
		alert("present");

	}

}



hasProperty("person",MyProps);