import {
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  RESET,
} from '../constants/auth';

export function fetchMe() {
  return {
    type: FETCH_ME,
  };
}
export function fetchMeSuccess(user) {
  return {
    type: FETCH_ME_SUCCESS,
    user,
  };
}
export function fetchMeFailure(error) {
  return {
    type: FETCH_ME_FAILURE,
    error,
  };
}

export function loginUser(credentials) {
  return {
    type: LOGIN_USER,
    credentials,
  };
}
export function loginUserSuccess(token) {
  return {
    type: LOGIN_USER_SUCCESS,
    token,
  };
}
export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
