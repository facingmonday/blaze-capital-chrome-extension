import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_LISTS,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAILURE,
  SAVE_LIST,
  SAVE_LIST_SUCCESS,
  SAVE_LIST_FAILURE,
  UPDATE_ACTIVE_LIST,
  RESET_ACTIVE_LIST,
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
} from '../constants/list';

export function fetchList(listId) {
  return {
    type: FETCH_LIST,
    listId,
  };
}
export function fetchListSuccess(list) {
  return {
    type: FETCH_LIST_SUCCESS,
    list,
  };
}
export function fetchListFailure(error) {
  return {
    type: FETCH_LIST_FAILURE,
    error,
  };
}
export function fetchLists(options) {
  return {
    type: FETCH_LISTS,
    options,
  };
}
export function fetchListsSuccess(response) {
  return {
    type: FETCH_LISTS_SUCCESS,
    response,
  };
}
export function fetchListsFailure(error) {
  return {
    type: FETCH_LISTS_FAILURE,
    error,
  };
}
export function saveList(list) {
  return {
    type: SAVE_LIST,
    list,
  };
}
export function saveListSuccess(list) {
  return {
    type: SAVE_LIST_SUCCESS,
    list,
  };
}
export function saveListFailure(error) {
  return {
    type: SAVE_LIST_FAILURE,
    error,
  };
}
export function updateActiveList(list) {
  return {
    type: UPDATE_ACTIVE_LIST,
    list,
  };
}
export function resetActiveList(data) {
  return {
    type: RESET_ACTIVE_LIST,
    data,
  };
}
export function deleteList(listId) {
  return {
    type: DELETE_LIST,
    listId,
  };
}
export function deleteListSuccess(list) {
  return {
    type: DELETE_LIST_SUCCESS,
    list,
  };
}
export function deleteListFailure(error) {
  return {
    type: DELETE_LIST_FAILURE,
    error,
  };
}
