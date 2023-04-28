
class Hello extends React.Component {
	render() {
		console.log(this.props.to)
		let bangs = "!".repeat(this.props.bangs)
		return (
			<div>
				<h1>Hello there! from {this.props.from}{bangs}</h1>
			</div>
		);
	}
}




