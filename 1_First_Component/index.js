function getMood() {
	const moods = ['Angry', 'Hungry']
	return moods[Math.floor(Math.random() * moods.length)]
}

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there! {getMood()}</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
