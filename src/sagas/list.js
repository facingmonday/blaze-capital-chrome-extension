import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_LISTS,
  FETCH_LIST,
  SAVE_LIST,
  DELETE_LIST,
} from '../constants/list';
import {
  fetchListsSuccess,
  fetchListsFailure,
  fetchListSuccess,
  fetchListFailure,
  saveListSuccess,
  saveListFailure,
  deleteListSuccess,
  deleteListFailure,
} from '../actions/list';
import { logoutUser } from '../actions/auth';
import {
  fetchLists as fetchListsApi,
  fetchList as fetchListApi,
  saveList as saveListApi,
  deleteList as deleteListApi,
} from '../apis/list';

export function* fetchListsSaga() {
  yield takeLatest(FETCH_LISTS, performFetchListsAction);
}

function* performFetchListsAction(action) {
  try {
    const response = yield call(fetchListsApi, action.options);
    if (response) {
      yield put(fetchListsSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchListsFailure(e));
  }
}
export function* fetchListSaga() {
  yield takeLatest(FETCH_LIST, performFetchListAction);
}
function* performFetchListAction(action) {
  try {
    const response = yield call(fetchListApi, action.listId);
    if (response) {
      yield put(fetchListSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(fetchListFailure(e));
  }
}

export function* saveListSaga() {
  yield takeLatest(SAVE_LIST, performSaveListAction);
}
function* performSaveListAction(action) {
  try {
    const response = yield call(saveListApi, action.list);
    if (response) {
      yield put(saveListSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(saveListFailure(e));
  }
}
export function* deleteListSaga() {
  yield takeLatest(DELETE_LIST, performDeleteListAction);
}
function* performDeleteListAction(action) {
  try {
    const response = yield call(deleteListApi, action.listId);
    if (response) {
      yield put(deleteListSuccess(response));
    }
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(deleteListFailure(e));
  }
}

export default function* defaultSaga() {
  return yield all([
    fetchListsSaga(),
    fetchListSaga(),
    saveListSaga(),
    deleteListSaga(),
  ]);
}
