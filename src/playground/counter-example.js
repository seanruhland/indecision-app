
const user = {
	name: 'Robin',
	age: '24',
	location: 'Santa Cruz'	,
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}

let count = 0;
const addOne = () => {
	 count++;
	renderCounterApp();
}
const minusOne = () => {
	count--;
	renderCounterApp();
}
const reset = () => {
	count = 0;
	renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick= {addOne} className="button">+1</button>
			<button onClick= {minusOne} className="button">-1</button>
			<button onClick= {reset} className="button">reset</button>
		</div>
		);
	ReactDOM.render(templateTwo, appRoot); 
};
renderCounterApp();