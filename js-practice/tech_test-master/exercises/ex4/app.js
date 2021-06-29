/*
 *	Directions
 *	Write a Javascript program that will return an array populated with the following values:
 *		- the current date formatted: DD-MM-YYYY
 *		- the number of days before next christmas
 *	Note
 *	- Native Javascript only
 *
 *	@function	app
 *
 */
function app() {
	

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

//if(mm<10) {
  //  mm = '0'+mm
//} 

today = dd+ '/' + mm + '/' + yyyy;
document.write("Today is "+today);

}



var startDate =   new Date();//today
//var endDate =    new Date(2018, 1-2, 30);//x-mas not comming in correct 
var endDate =    new Date(2019, 1-1, 1);//new year
function diffDays(d1, d2)
{
  var ndays;
  var tv1 = d1.valueOf();  
  var tv2 = d2.valueOf();

  ndays = (tv2 - tv1) / 1000 / 86400;
  ndays = Math.round(ndays - 0.5)-7;//adjusted
  return ndays;
}
var nDays = diffDays(startDate, endDate);



var nDays = diffDays(startDate, endDate);
document.write("<br>Days until you get to buy things and get things:  "+nDays);

app();