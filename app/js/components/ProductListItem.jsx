import React from 'react';

export default class ProductListItem extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.name}</td>
				<td>{this.props.item.about}</td>
				<td>{this.props.item.price}</td>
			</tr>
		);
	}
}