import { all, call, put, takeLatest } from 'redux-saga/effects';

import { LOAD_APP } from '../constants/app';

import { loadAppComplete } from '../actions/app';
import { fetchLists } from '../actions/list';

import { getTokenFromLocalStorage } from '../utils';

export function* loadAppSaga() {
  yield takeLatest(LOAD_APP, performloadAppAction);
}

function* performloadAppAction(action) {
  try {
    const token = yield call(getTokenFromLocalStorage);
    if (token) {
      yield put(fetchLists());
    }
    yield put(loadAppComplete(token));
  } catch (e) {
    console.log('Failed to load app', e);
  }
}

export default function* defaultSaga() {
  return yield all([loadAppSaga()]);
}
