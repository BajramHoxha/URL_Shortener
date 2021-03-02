import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import urlReducer from './reducers/url';

const fn = () => {
    const reducers = combineReducers({ url: urlReducer})
	const store = createStore(reducers, applyMiddleware(thunk))
	return store;
	};

export default fn;