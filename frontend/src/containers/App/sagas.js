import { put, takeLatest, all, call } from 'redux-saga/effects';
import {
    CREATE_LOAD_REQUEST,
    DELETE_LOAD_REQUEST,
    GET_ALL_LOAD_REQUEST,
    UPDATE_LOAD_REQUEST
} from './constants';
import {
    createLoadResponseAction,
    deleteLoadResponseAction,
    getAllLoadResponseAction,
    updateLoadResponseAction
} from './actions';
import {executeAction} from '../../utils/building';
import {
    createLoadService,
    deleteLoadByIdService,
    getAllLoadsService,
    updateLoadService
} from '../../services/load';

export function* getAllLoads() {
    const process = function* () {
        const response = yield call(getAllLoadsService);
        yield put(getAllLoadResponseAction(response));
    };
    yield call(executeAction, process);
}

export function* createLoad(action) {
    const process = function* (payload) {
        const {load} = payload;
        const response = yield call(createLoadService, load);
        yield put(createLoadResponseAction(response));
    };
    yield call(executeAction, process, action);
}

export function* updateLoad(action) {
    const process = function* (payload) {
        const {load} = payload;
        const response = yield call(updateLoadService, load.id, load);
        yield put(updateLoadResponseAction(response));
    };
    yield call(executeAction, process, action);
}

export function* deleteLoad(action) {
    const process = function* (payload) {
        const {load} = payload;
        const response = yield call(deleteLoadByIdService, load.id);
        yield put(deleteLoadResponseAction(response));
    };
    yield call(executeAction, process, action);
}

export default function* AppSaga() {
    yield all([
        takeLatest(GET_ALL_LOAD_REQUEST, getAllLoads),
        takeLatest(CREATE_LOAD_REQUEST, createLoad),
        takeLatest(UPDATE_LOAD_REQUEST, updateLoad),
        takeLatest(DELETE_LOAD_REQUEST, deleteLoad)
    ]);
}
