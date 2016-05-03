import React from 'react';
import { connect } from 'react-redux';

import ProductList from './ProductList.jsx';
import { getProduct } from '../actions/AppAction.js';

class Wrap extends React.Component {
	componentDidMount(){
		this.props.dispatch(getProduct());
	}
	render() {
		return (
			<div> 
				<h1>Hello my first React practice </h1>
				<ProductList data= {this.props.products}/>
			</div>
		);
	}
}

export default connect(store => store)(Wrap);