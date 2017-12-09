'use strict';

//arguments object - no longer bounc with arrow functions

var add = function add(a, b) {

	return a + b;
};
console.log(add(55, 1));

//this keyword - no longer bound 

var user = {
	name: 'Sean',
	cities: ['Santa Cruz', 'Huntington Beach', 'Los Angeles'],
	printPlacesLived: function printPlacesLived() {
		var _this = this;

		return this.cities.map(function (city) {
			return _this.name + ' has lived in ' + city;
		});
	}
};
console.log(user.printPlacesLived());

var multiplier = {
	//numbers - array of numbers
	//multiplyBy - single number
	//multiply - return a new array where hte number has been multiplied. 
	numbers: [2, 7, 5],
	multiplyBy: 5,
	multiply: function multiply() {
		var _this2 = this;

		return this.numbers.map(function (number) {
			return number * _this2.multiplyBy;
		});
	}
};
console.log(multiplier.multiply());
