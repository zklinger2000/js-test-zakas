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
