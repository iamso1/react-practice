import React from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList.jsx'

class Wrap extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div> 
				<h1>Hello my first React practice </h1>
				<ProductList data= {this.props.products}/>
			</div>
		);
	}
}

export default connect(store => store)(Wrap);