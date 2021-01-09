import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { LOGIN_USER, LOGOUT_USER } from '../constants/auth';
import { loginUserSuccess, loginUserFailure, reset } from '../actions/auth';
import { loginUser as loginUserApi } from '../apis/auth';
import {
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
  setCookie,
  deleteCookie,
} from '../utils';

function* performLoginUserAction(action) {
  try {
    const response = yield call(loginUserApi, action.credentials);
    if (response) {
      yield call(setTokenInLocalStorage, response.token);
      yield put(loginUserSuccess(response.token));
    }
  } catch (e) {
    yield put(loginUserFailure(e));
  }
}
function* performLogoutUserAction() {
  try {
    yield call(removeTokenFromLocalStorage);
    yield put(reset());
  } catch (e) {
    console.log('e', e);
  }
}
export function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, performLoginUserAction);
}
export function* logoutUserSaga() {
  yield takeLatest(LOGOUT_USER, performLogoutUserAction);
}
export default function* defaultSaga() {
  return yield all([loginUserSaga(), logoutUserSaga()]);
}
