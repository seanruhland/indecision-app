var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
 nameLet = 'Julie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block Scoping

const fullName = 'Robin Nguyen';
const fullName;

if(fullName) {
	 const firstName = fullName.split(' ')[0];
	console.log(firstName)
}

console.log(firstName)