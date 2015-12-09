import React from 'react';
import { connect } from 'react-redux';
class Wrap extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div> 
				Hello my { this.props.seed } @@
			</div>
		);
	}
}

export default connect(store => store)(Wrap);