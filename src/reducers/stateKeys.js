import { SET_LOADING, SET_ERROR, SET_NEXT_HREF } from '../constants/stateKeys';

const initialState = {
  loading: {
    app: false,
    user: false,
    address: false,
    role: false,
  },
  error: {
    app: null,
    user: null,
    address: null,
    role: null,
  },
  nextHref: {
    app: null,
    user: null,
    address: null,
    role: null,
  },
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.stateKey]: action.loading,
        },
      };
    case SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.stateKey]: action.error,
        },
      };
    case SET_NEXT_HREF:
      return {
        ...state,
        nextHref: {
          ...state.nextHref,
          [action.stateKey]: action.nextHref,
        },
      };
    default:
      return state;
  }
}
