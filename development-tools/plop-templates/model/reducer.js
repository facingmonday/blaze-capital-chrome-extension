import {
  FETCH_{{uppercase}}S,
  FETCH_{{uppercase}}S_SUCCESS,
  FETCH_{{uppercase}}S_FAILURE,
  RESET_{{uppercase}}S,
  FETCH_{{uppercase}},
  FETCH_{{uppercase}}_SUCCESS,
  FETCH_{{uppercase}}_FAILURE,
  SAVE_{{uppercase}},
  SAVE_{{uppercase}}_SUCCESS,
  SAVE_{{uppercase}}_FAILURE,
  UPDATE_ACTIVE_{{uppercase}},
  RESET_ACTIVE_{{uppercase}},
  DELETE_{{uppercase}},
  DELETE_{{uppercase}}_SUCCESS,
  DELETE_{{uppercase}}_FAILURE,
  RESET_DELETED_{{uppercase}},
} from '../constants/{{camelCaseName}}';
import { RESET } from '../constants/auth';

const initialState = {
  {{camelCaseName}}s: {
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
  active{{PascalCase}}: {
    {{camelCaseName}}: {},
    error: null,
    loading: false,
  },
  new{{PascalCase}}: {
    {{camelCaseName}}: null,
    error: null,
    loading: false,
  },
  delete{{PascalCase}}: {
    {{camelCaseName}}: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_{{uppercase}}S:
      return {
        ...state,
        {{camelCaseName}}s: {
          ...state.{{camelCaseName}}s,
          ...action.options,
          loading: true,
        },
      };
    case FETCH_{{uppercase}}S_SUCCESS:
      return {
        ...state,
        {{camelCaseName}}s: {
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
    case FETCH_{{uppercase}}S_FAILURE:
      return {
        ...state,
        {{camelCaseName}}s: {
          ...initialState.{{camelCaseName}}s,
          loading: false,
          error: action.error,
        },
      };
    case RESET_{{uppercase}}S:
      return {
        ...state,
        {{camelCaseName}}s: initialState.{{camelCaseName}}s,
      };
    case FETCH_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: { ...initialState.active{{PascalCase}}, loading: true },
      };
    case FETCH_{{uppercase}}_SUCCESS:
      return {
        ...state,
        active{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          error: null,
          loading: false,
        },
      };
    case FETCH_{{uppercase}}_FAILURE:
      return {
        ...state,
        active{{PascalCase}}: {
          ...initialState.active{{PascalCase}},
          loading: false,
          error: action.error,
        },
      };
    case SAVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          loading: true,
          error: null,
        },
      };
    case SAVE_{{uppercase}}_SUCCESS:
      return {
        ...state,
        active{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          loading: false,
          error: null,
        },
      };
    case SAVE_{{uppercase}}_FAILURE:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          loading: false,
          error: action.error,
        },
      };
    case UPDATE_ACTIVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: {
          ...state.active{{PascalCase}},
          {{camelCaseName}}: { ...state.active{{PascalCase}}.{{camelCaseName}}, ...action.{{camelCaseName}} },
        },
      };
    case RESET_ACTIVE_{{uppercase}}:
      return {
        ...state,
        active{{PascalCase}}: initialState.active{{PascalCase}},
      };
    case DELETE_{{uppercase}}:
      return {
        ...state,
        delete{{PascalCase}}: {
          {{camelCaseName}}: action.{{camelCaseName}},
          loading: true,
        },
      };
    case DELETE_{{uppercase}}_SUCCESS:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...state.delete{{PascalCase}},
          loading: false,
        },
      };
    case DELETE_{{uppercase}}_FAILURE:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...initialState.delete{{PascalCase}},
          error: action.error,
        },
      };
    case RESET_DELETED_{{uppercase}}:
      return {
        ...state,
        delete{{PascalCase}}: {
          ...initialState.delete{{PascalCase}},
        },
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
