import {
    LOADING_START_END,
    GET_ALL_PERSONS_RESPONSE,
    ERROR,
} from './constants';

const initialState = {
    loading: false,
    error: null,
    persons: []
};

const AppReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOADING_START_END:
            return { ...state, loading: payload.isLoading};
        case GET_ALL_PERSONS_RESPONSE:
            return { ...state, persons: payload.persons};
        case ERROR:
            return { ...state, error: payload.error};
        default:
            return state;
    }
};

export default AppReducer;