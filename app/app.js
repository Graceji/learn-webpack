import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {
	render() {
		return (
			<div>HelloWorld</div>
		)
	}
}

render(<HelloWorld />, document.getElementById('root'));