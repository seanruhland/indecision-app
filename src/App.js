
const app = {
	title:'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
	}
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
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add Option</button>
		</form>
	</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)