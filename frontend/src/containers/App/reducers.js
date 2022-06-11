/* eslint-disable complexity */
import produce from 'immer';

import {
	LOADING_START,
	LOADING_END,
} from './constants';

export const initialState = {
	loading: false,
};

export default function reducer(state = initialState, action) {
	return produce(state, (draft) => {
		switch (action.type) {
			case LOADING_START:
				draft.loading = true;
				break;
			case LOADING_END:
				draft.loading = false;
				break;
			default:
				draft.loading = initialState.loading;
				break;
		}
	});
}
