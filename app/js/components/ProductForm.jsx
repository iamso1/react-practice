import React from 'react';

export default class ProductForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'write something here...',
			price: 0,
			about: 'write something here...',
		};	
	}
	_nameOnChange(event){
		this.setState({
			name: event.target.value
		});
	}
	_priceOnChange(event){
		this.setState({
			price: event.target.value
		});
	}
	render() {
		return (
			<div>
				<label>
					Name:
					<input 
					type="text" 
					value={ this.state.name } 
					onChange={ this._nameOnChange.bind(this) }/>
				</label>
				<label>
					Price:
					<input type="number" value={ this.state.price } onChange={ this._priceOnChange.bind(this) }/>
				</label>
				<button>Add</button>
			</div>
		);
	}
}