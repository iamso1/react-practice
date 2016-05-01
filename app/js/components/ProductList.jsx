import React from 'react';
import ProductListItem from './ProductListItem.jsx';

export default class ProductList extends React.Component {
	render() {
		var data = this.props.data.map((item, index) => {
			return (<ProductListItem item={item}></ProductListItem>)
		});
		return (
			<table class='table'>
				<thead>
					<tr>
						<td>Name</td>
						<td>About</td>
						<td>Price</td>
					</tr>
				</thead>
				<tbody>
				{data}
				</tbody>
			</table>
		);
	}
}

ProductListItem.defaultProps = {
	data: []
}