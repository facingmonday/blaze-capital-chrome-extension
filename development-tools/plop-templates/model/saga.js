import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_{{uppercase}}S, FETCH_{{uppercase}}, SAVE_{{uppercase}}, DELETE_{{uppercase}} } from '../constants/{{camelCaseName}}';
import {
  fetch{{PascalCase}}sSuccess,
  fetch{{PascalCase}}sFailure,
  fetch{{PascalCase}}Success,
  fetch{{PascalCase}}Failure,
  save{{PascalCase}}Success,
  save{{PascalCase}}Failure,
  delete{{PascalCase}}Success,
  delete{{PascalCase}}Failure,
} from '../actions/{{camelCaseName}}';
import {
  fetch{{PascalCase}}s as fetch{{PascalCase}}sApi,
  fetch{{PascalCase}} as fetch{{PascalCase}}Api,
  save{{PascalCase}} as save{{PascalCase}}Api,
  delete{{PascalCase}} as delete{{PascalCase}}Api,
} from '../apis/{{camelCaseName}}';

export function* fetch{{PascalCase}}sSaga() {
  yield takeLatest(FETCH_{{uppercase}}S, performFetch{{PascalCase}}sAction);
}

function* performFetch{{PascalCase}}sAction(action) {
  try {
    const response = yield call(fetch{{PascalCase}}sApi, action.options);
    if (response) {
      yield put(fetch{{PascalCase}}sSuccess(response));
    }
  } catch (e) {
    yield put(fetch{{PascalCase}}sFailure(e));
  }
}
export function* fetch{{PascalCase}}Saga() {
  yield takeLatest(FETCH_{{uppercase}}, performFetch{{PascalCase}}Action);
}
function* performFetch{{PascalCase}}Action(action) {
  try {
    const response = yield call(fetch{{PascalCase}}Api, action.{{camelCaseName}}Id);
    if (response) {
      yield put(fetch{{PascalCase}}Success(response));
    }
  } catch (e) {
    yield put(fetch{{PascalCase}}Failure(e));
  }
}

export function* save{{PascalCase}}Saga() {
  yield takeLatest(SAVE_{{uppercase}}, performSave{{PascalCase}}Action);
}
function* performSave{{PascalCase}}Action(action) {
  try {
    const response = yield call(save{{PascalCase}}Api, action.{{camelCaseName}});
    if (response) {
      yield put(save{{PascalCase}}Success(response));
    }
  } catch (e) {
    yield put(save{{PascalCase}}Failure(e));
  }
}
export function* delete{{PascalCase}}Saga() {
  yield takeLatest(DELETE_{{uppercase}}, performDelete{{PascalCase}}Action);
}
function* performDelete{{PascalCase}}Action(action) {
  try {
    const response = yield call(delete{{PascalCase}}Api, action.{{camelCaseName}}Id);
    if (response) {
      yield put(delete{{PascalCase}}Success(response));
    }
  } catch (e) {
    yield put(delete{{PascalCase}}Failure(e));
  }
}

export default function* defaultSaga() {
  return yield all([fetch{{PascalCase}}sSaga(), fetch{{PascalCase}}Saga(), save{{PascalCase}}Saga(), delete{{PascalCase}}Saga()]);
}
