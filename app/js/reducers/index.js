import { combineReducers } from 'redux';
import seed from './seed.js';
import products from './products.js';

export default combineReducers({
	seed,
	products
}) 