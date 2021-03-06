//more common current way to define things
//this is "object literal notation"
var person = {
	name: "Nicholas",
	age: 29,
	job: "Software Engineer",
	sayName: function() {
		alert(this.name);
	}
};

//showing how using 'new' or not changes the typeof,
//which is also different in instanceof but in a different way
var value = "25"; 
var number = Number( value); // casting function 
alert( typeof number); //" number" 
var obj = new Number( value); // constructor 
alert( typeof obj); //" object"

/*
function sum(num1, num2) {
	return num1 + num2;
}

function callSum1(num1, num2) {
	return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
	return sum.apply(this, [num1, num2]);
}

var count = 0;

function add10(num) {
	num += 10;
	return num;
}

var values = {
	name : "Robert",
	age : 33
};

var oneValue = { name : "Zack" };

function PrintValues(arg1) {
	var content = "";

	if (arg1.name.length > 0)
		content += ("Name: " + arg1.name + '\n');
	if (arg1.age != undefined)
		content += ("Age: " + arg1.age + '\n');
	return content;
}

function PrintProperty(object, propertyName) {
	return object[propertyName];
}
*/

/*
function createComparisonFunction(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}
*/

/*
function callSomeFunction(someFunction, someArgument) {
	return someFunction(someArgument);
}

function sum(num1) {
	return num1 + 10;
}

var result1 = callSomeFunction(sum, 10);
console.log(result1);
*/
