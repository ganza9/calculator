var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply= function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt (prompt("Enter a number:"));
var number2 = parseInt (prompt("Enter another number."));

var result = divide(number1, number2);
alert(result);


var bmi = function (number1, number2) {
	return (number1 / (number2**2)) * 703;
}


var number1 = parseInt (prompt("Enter weight:"));
var number2= parseInt (prompt("Enter height:"));



var result = bmi(number1, number2);
alert(result);

var toCelcius = function (tempFarenheit){
  return tempFarenheit*(9/5) + 32;
}

var tempFarenheit = prompt("What is the temperature in Celcius?");

var temp = toCelcius(tempFarenheit);
alert("That is " + temp + " degrees in farenheit.");
