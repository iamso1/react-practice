import axios from 'axios';

function receiveProduct(data) {
	return {
		type: 'RECEIVE_Product',
		data: data
	}
}

export function getProduct() {
	return function(dispatch){
		return axios('http://www.json-generator.com/api/json/get/cfICUnzUjm?indent=2')	
		.then(res => dispatch(receiveProduct(res.data)));
	}
}