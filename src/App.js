
const app = {
	title:'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

// JSX - Javascript XML

//only render the subtitle (and p tag) if subtitle exist - logical && operator
//render new p tag - if options.length > 0 "Here are your options" if 

const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p> {app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
		<ol>
			<li>Item one</li>
			<li>Item checktwo</li>
		</ol>
	</div>
);

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
const templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}	
		{getLocation(user.location)}
	</div>
	);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); 