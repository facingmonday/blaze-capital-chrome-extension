import {
  FETCH_STOCKS,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
  SET_ACTIVE_STOCK,
  RESET_STOCK,
} from '../constants/stock';
import { RESET } from '../constants/auth';

const initialState = {
  stocks: [],
  activeStock: null,
  error: null,
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        stocks: action.response || [],
        activeStock:
          Array.isArray(action.response) && action.response.length
            ? action.response[0]
            : null,
      };
    case FETCH_STOCKS_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.error,
      };
    case SET_ACTIVE_STOCK:
      return {
        ...state,
        activeStock: action.stock,
      };
    case RESET_STOCK:
    case RESET:
      return initialState;
    default:
      return state;
  }
};
