import {
  SAVE_ALERT,
  SAVE_ALERT_SUCCESS,
  SAVE_ALERT_FAILURE,
  UPDATE_ACTIVE_ALERT,
  RESET_ALERT,
} from '../constants/alert';
import { RESET } from '../constants/auth';

const initialState = {
  alerts: [],
  activeAlert: {},
  error: null,
  loading: false,
  complete: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALERT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SAVE_ALERT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        complete: true,
      };
    case SAVE_ALERT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_ACTIVE_ALERT:
      return {
        ...state,
        activeAlert: { ...state.activeAlert, ...action.alert },
      };
    case RESET_ALERT:
      return initialState;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
