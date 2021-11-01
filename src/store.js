import { createStore } from 'redux';

import reducer from './reducers/reducer';

// const enhancer = (createStore) => (...args) => {
// 	const store = createStore(...args)
// 	const originalDispatch = store.dispatch;
// 	store.dispatch = (action) => {
// 		if (typeof action === 'string') {
// 			return originalDispatch({
// 				type: action
// 			})
// 		}

// 		return originalDispatch(action)
// 	}
// 	return store
// }

const store = createStore(reducer);

console.log(store.getState())

export default store;
