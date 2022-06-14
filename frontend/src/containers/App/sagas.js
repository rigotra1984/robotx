import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_ALL_PERSONS_REQUEST} from './constants';
import {getAllPersonsService} from '../../services/person';
import {getAllPersonResponseAction} from './actions';
import {executeAction} from "../../utils/building";

export function* getAll() {
    const process = function* () {
        const response = yield call(getAllPersonsService);
        yield put(getAllPersonResponseAction(response));
    };
    yield call(executeAction, process);
}

export default function* AppSaga() {
    yield all([
        takeLatest(GET_ALL_PERSONS_REQUEST, getAll)
    ]);
}
