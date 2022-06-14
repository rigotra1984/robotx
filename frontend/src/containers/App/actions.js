import {
    LOADING_START_END,
    GET_ALL_PERSONS_REQUEST,
    GET_ALL_PERSONS_RESPONSE,
    ERROR,
} from './constants';

export const loadingStartAndEndAction = (isLoading) => ({
    type: LOADING_START_END,
    payload: {isLoading}
});

export const getAllPersonRequestAction = () => ({
    type: GET_ALL_PERSONS_REQUEST,
});

export const getAllPersonResponseAction = (persons) => ({
    type: GET_ALL_PERSONS_RESPONSE,
    payload: {persons}
});

export const sendErrorAction = (error) => ({
    type: ERROR,
    payload: {error}
});