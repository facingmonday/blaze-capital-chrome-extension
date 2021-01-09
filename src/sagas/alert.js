import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FETCH_ALERTS, FETCH_ALERT, SAVE_ALERT } from '../constants/alert';
import {
  fetchAlertsSuccess,
  fetchAlertsFailure,
  fetchAlertSuccess,
  fetchAlertFailure,
  saveAlertSuccess,
  saveAlertFailure,
  resetAlert,
} from '../actions/alert';
import { logoutUser } from '../actions/auth';
import { resetStock } from '../actions/stock';

// APIs
import {
  fetchAlerts as fetchAlertsApi,
  fetchAlert as fetchAlertApi,
  saveAlert as saveAlertApi,
} from '../apis/alert';

export function* fetchAlertsSaga() {
  yield takeLatest(FETCH_ALERTS, performFetchAlertsAction);
}

function* performFetchAlertsAction(action) {
  try {
    const response = yield call(fetchAlertsApi, action.options);
    if (response) {
      yield put(fetchAlertsSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchAlertsFailure(e));
  }
}
export function* fetchAlertSaga() {
  yield takeLatest(FETCH_ALERT, performFetchAlertAction);
}
function* performFetchAlertAction(action) {
  try {
    const response = yield call(fetchAlertApi, action.alertId);
    if (response) {
      yield put(fetchAlertSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchAlertFailure(e));
  }
}

export function* saveAlertSaga() {
  yield takeLatest(SAVE_ALERT, performSaveAlertAction);
}
function* performSaveAlertAction(action) {
  try {
    const alert = {
      ...action.alert,
      searchStockName: action.alert.stock.symbol.replace(/(<([^>]+)>)/gi, ''),
      stockPositionIndex: 0,
    };
    if (alert.list && alert.stock && alert.timeFrame) {
      const response = yield call(saveAlertApi, alert);
      if (response) {
        yield put(saveAlertSuccess(response));
      } else {
        yield put(saveAlertFailure(new Error('Invalid Alert')));
      }
      yield delay(2000);
      window.close();
      yield put(resetAlert());
      yield put(resetStock());
    } else {
      yield put(saveAlertFailure(new Error('Invalid Alert')));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(saveAlertFailure(e));
  }
}

export default function* defaultSaga() {
  return yield all([fetchAlertsSaga(), fetchAlertSaga(), saveAlertSaga()]);
}
