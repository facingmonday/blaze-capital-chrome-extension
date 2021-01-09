import { all } from 'redux-saga/effects';

import alertSaga from './alert';
import appSaga from './app';
import authSaga from './auth';
import listSaga from './list';
import statSaga from './stat';
import stockSaga from './stock';

export default function* rootSaga() {
  yield all([
    alertSaga(),
    appSaga(),
    authSaga(),
    listSaga(),
    statSaga(),
    stockSaga(),
  ]);
}
