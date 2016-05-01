const initialState =[];

export default function products(state = initialState, action) {
	switch(action.type) {
        case 'RECEIVE_Product':
            state = action.data;
            return [ ...state ]
    	default:
    		return state;
	}
}
