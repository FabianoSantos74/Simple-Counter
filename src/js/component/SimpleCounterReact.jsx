import React from "react";

export class SimpleCounterReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.setState({ number: this.state.number + 1 });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div>
				<button type="button" class="btn btn-dark">
					Simple Counter
				</button>
				{"\n"}

				<button class="btn btn-info" type="button" disabled>
					<span
						class="spinner-grow spinner-grow-sm"
						role="status"
						aria-hidden="true"
					/>
					{"\n"}
					Progressive counter: {this.state.number}
					{"\n"}
				</button>
			</div>
		);
	}
}
