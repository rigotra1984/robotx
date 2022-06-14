import { all, fork } from 'redux-saga/effects';

import AppSaga from './containers/App/sagas';

export default function* rootSaga() {
    yield all([fork(AppSaga)]);
}