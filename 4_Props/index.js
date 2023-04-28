
class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					data={[1, 2]}
					isFunny   // true
					bangs={4}
					from="An"
					to="Ko" />
				<Hello from="Ju" to="Zi" />
				<NumPicker />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

