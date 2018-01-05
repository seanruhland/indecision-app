'use strict';

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	console.log('form submitted');
};

// JSX - Javascript XML

//only render the subtitle (and p tag) if subtitle exist - logical && operator
//render new p tag - if options.length > 0 "Here are your options" if 

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		' ',
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'No Options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item checktwo'
		)
	),
	React.createElement(
		'form',
		{ onSubmit: onFormSubmit },
		React.createElement('input', { type: 'text', name: 'option' }),
		React.createElement(
			'button',
			null,
			'Add Option'
		)
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
