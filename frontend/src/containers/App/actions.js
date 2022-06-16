import {
    LOADING_START_END,
    ERROR,
    GET_ALL_LOAD_REQUEST,
    GET_ALL_LOAD_RESPONSE,
    CREATE_LOAD_REQUEST,
    CREATE_LOAD_RESPONSE,
    UPDATE_LOAD_REQUEST,
    UPDATE_LOAD_RESPONSE,
    DELETE_LOAD_REQUEST,
    DELETE_LOAD_RESPONSE,
} from './constants';

export const loadingStartAndEndAction = (isLoading) => ({
    type: LOADING_START_END,
    payload: {isLoading}
});

export const sendErrorAction = (error) => ({
    type: ERROR,
    payload: {error}
});

export const getAllLoadRequestAction = () => ({
    type: GET_ALL_LOAD_REQUEST,
});

export const getAllLoadResponseAction = (loads) => ({
    type: GET_ALL_LOAD_RESPONSE,
    payload: {loads}
});

export const createLoadRequestAction = (load) => ({
    type: CREATE_LOAD_REQUEST,
    payload: {load}
});

export const createLoadResponseAction = (load) => ({
    type: CREATE_LOAD_RESPONSE,
    payload: {load}
});

export const updateLoadRequestAction = (load) => ({
    type: UPDATE_LOAD_REQUEST,
    payload: {load}
});

export const updateLoadResponseAction = (load) => ({
    type: UPDATE_LOAD_RESPONSE,
    payload: {load}
});

export const deleteLoadRequestAction = (load) => ({
    type: DELETE_LOAD_REQUEST,
    payload: {load}
});

export const deleteLoadResponseAction = (load) => ({
    type: DELETE_LOAD_RESPONSE,
    payload: {load}
});
