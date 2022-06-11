import { combineReducers } from 'redux';

import appContainerReducer from './containers/App/reducers';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
	const rootReducer = combineReducers({
		root: appContainerReducer,
		...injectedReducers,
	});

	return rootReducer;
}