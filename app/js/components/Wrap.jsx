import React from 'react';
import { connect } from 'react-redux';

import ProductListItem from './ProductListItem.jsx'

class Wrap extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div> 
				Hello my first React practice
				<ProductListItem item={this.props.product}/>
			</div>
		);
	}
}

export default connect(store => store)(Wrap);