import {
    LOADING_START_END,
    ERROR,
    GET_ALL_LOAD_RESPONSE,
    CREATE_LOAD_RESPONSE,
    UPDATE_LOAD_RESPONSE,
    DELETE_LOAD_RESPONSE,
} from './constants';

const initialState = {
    loading: false,
    error: null,
    loads: [],
};

const AppReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOADING_START_END:
            return { ...state, loading: payload.isLoading};
        case ERROR:
            return { ...state, error: payload.error};
        case GET_ALL_LOAD_RESPONSE:
            return { ...state, loads: payload.loads};
        case CREATE_LOAD_RESPONSE:
            return { ...state, loads: [...state.loads, payload.load]};
        case UPDATE_LOAD_RESPONSE:
            return { ...state, loads: [...state.loads.filter((item) => item.id !== payload.load.id), payload.load]};
        case DELETE_LOAD_RESPONSE:
            return { ...state, loads: [...state.loads.filter((item) => item.id !== payload.load.id)]};
        default:
            return state;
    }
};

export default AppReducer;