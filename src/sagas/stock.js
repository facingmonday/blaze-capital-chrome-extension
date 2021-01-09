import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STOCKS, FETCH_STOCK } from '../constants/stock';

// Actions
import {
  fetchStocksSuccess,
  fetchStocksFailure,
  fetchStockSuccess,
  fetchStockFailure,
} from '../actions/stock';
import { logoutUser } from '../actions/auth';
import { updateActiveAlert } from '../actions/alert';

// APIs
import {
  fetchStocks as fetchStocksApi,
  fetchStock as fetchStockApi,
} from '../apis/stock';

export function* fetchStocksSaga() {
  yield takeLatest(FETCH_STOCKS, performFetchStocksAction);
}

function* performFetchStocksAction(action) {
  try {
    const response = yield call(fetchStocksApi, action.searchTerm);
    if (Array.isArray(response) && response.length) {
      yield put(updateActiveAlert({ stock: response[0] }));
      yield put(fetchStocksSuccess(response));
    } else {
      yield put(fetchStocksFailure(new Error('Stock symbol not found')));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchStocksFailure(e));
  }
}
export function* fetchStockSaga() {
  yield takeLatest(FETCH_STOCK, performFetchStockAction);
}
function* performFetchStockAction(action) {
  try {
    const response = yield call(fetchStockApi, action.stockId);
    if (response) {
      yield put(fetchStockSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchStockFailure(e));
  }
}

export default function* defaultSaga() {
  return yield all([fetchStocksSaga(), fetchStockSaga()]);
}
