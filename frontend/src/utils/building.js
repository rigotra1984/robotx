import { put, call } from 'redux-saga/effects';
import {loadingStartAndEndAction, sendErrorAction} from '../containers/App/actions';

function* processManage (process, action = null) {
    if (action) {
        const { payload } = action;
        yield call(process, payload);
    } else {
        yield call(process);
    }
}

export function* executeAction(process, action = null) {
    try {
        yield put(loadingStartAndEndAction(true));
        yield call(processManage, process, action);
    } catch(e) {
        yield put (sendErrorAction('Ocurrio un error en el servidor al hacer la llamada al backend'));
    } finally {
        yield put(loadingStartAndEndAction(false));
    }
}