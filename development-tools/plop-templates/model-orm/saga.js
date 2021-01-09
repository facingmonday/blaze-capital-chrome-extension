import { all, call, put, takeLatest, delay, select, race } from 'redux-saga/effects';
import { FETCH_{{uppercase}}S, FETCH_{{uppercase}}, SAVE_{{uppercase}}, DELETE_{{uppercase}} } from '../constants/{{camelCaseName}}';
import { setLoading, setError } from '../actions/stateKeys';

import { logoutUser } from '../actions/auth';

import { create{{PascalCase}}, update{{PascalCase}}, delete{{PascalCase}} } from '../actions/{{camelCaseName}}';

import {
  fetch{{PascalCase}}es as fetch{{PascalCase}}esApi,
  fetch{{PascalCase}} as fetch{{PascalCase}}Api,
  save{{PascalCase}} as save{{PascalCase}}Api,
  delete{{PascalCase}} as delete{{PascalCase}}Api,
} from '../apis/{{camelCaseName}}';

const STATE_KEY = '{{camelCaseName}}';

export function* fetch{{PascalCase}}esSaga() {
  yield takeLatest(FETCH_{{uppercase}}S, performFetch{{PascalCase}}esAction);
}
function* performFetch{{PascalCase}}esAction(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(fetch{{PascalCase}}sApi, action.option),
      timeout: delay(10000),
    });
    if (response?.results?.length) {
      yield all(response.results.map({{camelCaseName}} => put(create{{PascalCase}}({{camelCaseName}}))));
    } else {
      yield put(setError(new Error('Timout has occured')));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* fetch{{PascalCase}}Saga() {
  yield takeLatest(FETCH_{{uppercase}}, performFetch{{PascalCase}}Action);
}
function* performFetch{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(fetch{{PascalCase}}Api, action.{{camelCaseName}}Id),
      timeout: delay(10000),
    });
    if (response?.{{camelCaseName}}Id) {
      yield put(create{{PascalCase}}({{camelCaseName}}));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* save{{PascalCase}}Saga() {
  yield takeLatest(SAVE_{{uppercase}}, performSave{{PascalCase}}Action);
}
function* performSave{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(save{{PascalCase}}Api, action.{{camelCaseName}}),
      timeout: delay(10000),
    });
    if (response?.{{camelCaseName}}Id) {
      yield put(update{{PascalCase}}({{camelCaseName}}));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}

export function* delete{{PascalCase}}Saga() {
  yield takeLatest(SAVE_{{uppercase}}, performDelete{{PascalCase}}Action);
}
function* performDelete{{PascalCase}}Action(action) {
  try {
    yield put(setLoading(STATE_KEY, true));
    const { response, timeout } = yield race({
      response: call(delete{{PascalCase}}Api, action.{{camelCaseName}}),
      timeout: delay(10000),
    });
    if (response?.{{camelCaseName}}Id) {
      yield put(delete{{PascalCase}}({{camelCaseName}}));
      const nextHref = yield select(selectNextHref(STATE_KEY));
      if (nextHref) {
        yield put(push(nextHref));
      }
    } else {
      yield put(setError(new Error('Timout has occured')));
    }
    yield put(setLoading(STATE_KEY, false));
  } catch (e) {
    if (parseInt(e.code, 10) === 401) {
      yield put(logoutUser());
    }
    yield put(setError(STATE_KEY, e));
    yield put(setLoading(STATE_KEY, false));
  }
}
