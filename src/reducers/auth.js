import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  RESET_LOGGED_IN_USER,
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  LOGOUT_USER,
  RESET,
} from '../constants/auth';
import { LOAD_APP_COMPLETE } from '../constants/app';

const initialState = {
  token: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        token: action.token,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        token: null,
        loading: false,
        error: action.error,
      };
    case RESET_LOGGED_IN_USER:
      return state;
    case FETCH_ME:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FETCH_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case LOAD_APP_COMPLETE:
      return {
        ...state,
        token: action.token,
      };
    case LOGOUT_USER:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
