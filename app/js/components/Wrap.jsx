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
				<h2>this is seed - {this.props.seed}</h2>
			</div>
		);
	}
}

export default connect(state => state)(Wrap);