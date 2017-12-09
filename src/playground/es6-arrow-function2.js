//arguments object - no longer bounc with arrow functions

const add = (a,b) => {

	return a + b;
}
console.log(add(55,1))

//this keyword - no longer bound 

const user = {
	name:'Sean',
	cities : ['Santa Cruz', 'Huntington Beach', 'Los Angeles'],
	printPlacesLived( ) {
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};
console.log(user.printPlacesLived());

const multiplier = {
	//numbers - array of numbers
	//multiplyBy - single number
	//multiply - return a new array where hte number has been multiplied. 
	numbers: [2,7,5],
	multiplyBy: 5,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy)
	}

};
console.log(multiplier.multiply());























