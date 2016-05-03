import { createStore, applyMiddleware,compose} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
export default function(initialState){
	const store = createStoreWithMiddleware(reducers, initialState);
	if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
	return store;
}




