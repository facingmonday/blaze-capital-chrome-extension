import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_STATS, FETCH_STAT } from '../constants/stat';
import {
  fetchStatsSuccess,
  fetchStatsFailure,
  fetchStatSuccess,
  fetchStatFailure,
} from '../actions/stat';
import { fetchStats as fetchStatsApi } from '../apis/stat';

export function* fetchStatsSaga() {
  yield takeLatest(FETCH_STATS, performFetchStatsAction);
}

function* performFetchStatsAction(action) {
  try {
    const response = yield call(fetchStatsApi, action.options);
    if (response) {
      yield put(fetchStatsSuccess(response));
    }
  } catch (e) {
    yield put(fetchStatsFailure(e));
  }
}

export default function* defaultSaga() {
  return yield all([fetchStatsSaga()]);
}
