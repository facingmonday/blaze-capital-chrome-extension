import {
  FETCH_STATS,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  RESET_STATS,
  FETCH_STAT,
  FETCH_STAT_SUCCESS,
  FETCH_STAT_FAILURE,
  SAVE_STAT,
  SAVE_STAT_SUCCESS,
  SAVE_STAT_FAILURE,
  UPDATE_ACTIVE_STAT,
  RESET_ACTIVE_STAT,
  DELETE_STAT,
  DELETE_STAT_SUCCESS,
  DELETE_STAT_FAILURE,
  RESET_DELETED_STAT,
} from '../constants/stat';
import { RESET } from '../constants/auth';

const initialState = {
  stats: {
    error: null,
    loading: false,
    offset: 0,
    limit: 25,
    sort: [],
    searchTerm: '',
    filters: [],
    total: 0,
    results: [],
  },
  activeStat: {
    stat: {},
    error: null,
    loading: false,
  },
  newStat: {
    stat: null,
    error: null,
    loading: false,
  },
  deleteStat: {
    stat: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS:
      return {
        ...state,
        stats: {
          ...state.stats,
          ...action.options,
          loading: true,
        },
      };
    case FETCH_STATS_SUCCESS:
      return {
        ...state,
        stats: {
          results: action.response.results,
          error: null,
          loading: false,
          offset: action.response.offset,
          limit: action.response.limit,
          sort: action.response.sort,
          searchTerm: action.response.searchTerm,
          filters: action.response.filters,
          total: action.response.total,
        },
      };
    case FETCH_STATS_FAILURE:
      return {
        ...state,
        stats: {
          ...initialState.stats,
          loading: false,
          error: action.error,
        },
      };
    case RESET_STATS:
      return {
        ...state,
        stats: initialState.stats,
      };
    case FETCH_STAT:
      return {
        ...state,
        activeStat: { ...initialState.activeStat, loading: true },
      };
    case FETCH_STAT_SUCCESS:
      return {
        ...state,
        activeStat: {
          stat: action.stat,
          error: null,
          loading: false,
        },
      };
    case FETCH_STAT_FAILURE:
      return {
        ...state,
        activeStat: {
          ...initialState.activeStat,
          loading: false,
          error: action.error,
        },
      };
    case SAVE_STAT:
      return {
        ...state,
        activeStat: {
          ...state.activeStat,
          loading: true,
          error: null,
        },
      };
    case SAVE_STAT_SUCCESS:
      return {
        ...state,
        activeStat: {
          stat: action.stat,
          loading: false,
          error: null,
        },
      };
    case SAVE_STAT_FAILURE:
      return {
        ...state,
        activeStat: {
          ...state.activeStat,
          loading: false,
          error: action.error,
        },
      };
    case UPDATE_ACTIVE_STAT:
      return {
        ...state,
        activeStat: {
          ...state.activeStat,
          stat: { ...state.activeStat.stat, ...action.stat },
        },
      };
    case RESET_ACTIVE_STAT:
      return {
        ...state,
        activeStat: initialState.activeStat,
      };
    case DELETE_STAT:
      return {
        ...state,
        deleteStat: {
          stat: action.stat,
          loading: true,
        },
      };
    case DELETE_STAT_SUCCESS:
      return {
        ...state,
        deleteStat: {
          ...state.deleteStat,
          loading: false,
        },
      };
    case DELETE_STAT_FAILURE:
      return {
        ...state,
        deleteStat: {
          ...initialState.deleteStat,
          error: action.error,
        },
      };
    case RESET_DELETED_STAT:
      return {
        ...state,
        deleteStat: {
          ...initialState.deleteStat,
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
