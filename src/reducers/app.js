import { LOAD_APP, LOAD_APP_COMPLETE } from '../constants/app';

const initialState = {
  loading: true,
  complete: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...state,
        loading: true,
      };
    case LOAD_APP_COMPLETE:
      return {
        ...state,
        loading: false,
        complete: true,
      };
    default:
      return state;
  }
};
