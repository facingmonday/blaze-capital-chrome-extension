import {
  FETCH_{{uppercase}},
  FETCH_{{uppercase}}_SUCCESS,
  FETCH_{{uppercase}}_FAILURE,
  FETCH_{{uppercase}}S,
  FETCH_{{uppercase}}S_SUCCESS,
  FETCH_{{uppercase}}S_FAILURE,
  SAVE_{{uppercase}},
  SAVE_{{uppercase}}_SUCCESS,
  SAVE_{{uppercase}}_FAILURE,
  UPDATE_ACTIVE_{{uppercase}},
  RESET_ACTIVE_{{uppercase}},
  DELETE_{{uppercase}},
  DELETE_{{uppercase}}_SUCCESS,
  DELETE_{{uppercase}}_FAILURE,
} from '../constants/{{camelCaseName}}';

export function fetch{{PascalCase}}({{camelCaseName}}Id) {
  return {
    type: FETCH_{{uppercase}},
    {{camelCaseName}}Id,
  };
}
export function fetch{{PascalCase}}Success({{camelCaseName}}) {
  return {
    type: FETCH_{{uppercase}}_SUCCESS,
    {{camelCaseName}},
  };
}
export function fetch{{PascalCase}}Failure(error) {
  return {
    type: FETCH_{{uppercase}}_FAILURE,
    error,
  };
}
export function fetch{{PascalCase}}s(options) {
  return {
    type: FETCH_{{uppercase}}S,
    options,
  };
}
export function fetch{{PascalCase}}sSuccess(response) {
  return {
    type: FETCH_{{uppercase}}S_SUCCESS,
    response,
  };
}
export function fetch{{PascalCase}}sFailure(error) {
  return {
    type: FETCH_{{uppercase}}S_FAILURE,
    error,
  };
}
export function save{{PascalCase}}({{camelCaseName}}) {
  return {
    type: SAVE_{{uppercase}},
    {{camelCaseName}},
  };
}
export function save{{PascalCase}}Success({{camelCaseName}}) {
  return {
    type: SAVE_{{uppercase}}_SUCCESS,
    {{camelCaseName}},
  };
}
export function save{{PascalCase}}Failure(error) {
  return {
    type: SAVE_{{uppercase}}_FAILURE,
    error,
  };
}
export function updateActive{{PascalCase}}({{camelCaseName}}) {
  return {
    type: UPDATE_ACTIVE_{{uppercase}},
    {{camelCaseName}},
  };
}
export function resetActive{{PascalCase}}(data) {
  return {
    type: RESET_ACTIVE_{{uppercase}},
    data,
  };
}
export function delete{{PascalCase}}({{camelCaseName}}Id) {
  return {
    type: DELETE_{{uppercase}},
    {{camelCaseName}}Id,
  };
}
export function delete{{PascalCase}}Success({{camelCaseName}}) {
  return {
    type: DELETE_{{uppercase}}_SUCCESS,
    {{camelCaseName}},
  };
}
export function delete{{PascalCase}}Failure(error) {
  return {
    type: DELETE_{{uppercase}}_FAILURE,
    error,
  };
}
