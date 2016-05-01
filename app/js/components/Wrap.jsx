import React from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList.jsx'
import ProductForm from './ProductForm.jsx'


class Wrap extends React.Component {
	render() {
		return (
			<div> 
				<h1>Hello my first React practice </h1>
				<ProductForm/>
				<ProductList data= {this.props.products}/>
			</div>
		);
	}
}

export default connect(store => store)(Wrap);