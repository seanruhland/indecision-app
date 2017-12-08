console.log('app.js is running!')
		
var app = {
	title:'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
}
// JSX - Javascript XML

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
);

var user = {
	name: 'Robin',
	age: 'Over the Hill',
	location: 'Santa Cruz'	,
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location}</p>;
	} else {
		return undefined;
	}
}
var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>	
		<p>{getLocation(user.location)}</p>
	</div>
	);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot); 