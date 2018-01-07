
let visibility = false;

const makeVisible = () => {
	visibility = !visibility;
	render();
}

const render = () => {
	const template = (
		<div>
			<h1>Make it SHOW</h1>
			<button onClick={makeVisible}>
				{visibility ? 'Hide Text' : 'Show Text'}
			</button>
			{visibility && (
				<div>hey, this text is now showing</div>
				)}
		</div>
	)

	ReactDOM.render(template, document.getElementById('app'))

}
render()