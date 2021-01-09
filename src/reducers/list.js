import {
  FETCH_LISTS,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
} from '../constants/list';
import { RESET } from '../constants/auth';

const initialState = {
  lists: [],
  activeList: null,
  loading: false,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: action.response,
      };
    case FETCH_LISTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
