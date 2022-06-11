import {createSelector} from 'reselect';
import {initialState} from './reducers';
import {KEY} from './constants';

const selectRoot = (state) => state[KEY] || initialState; //home is the key entry en reducers or injected reducers

const makeSelectLoading = () =>
	createSelector(
		selectRoot,
		(rootState) => rootState.loading
	);

export {
	selectRoot,
	makeSelectLoading,
};
