import {
  buildUrl,
  getCookie,
  formatFilterAndSortOptions,
  getTokenFromLocalStorage,
} from '../utils';
const PATH = '/lists';

export const fetchLists = async (options = {}) => {
  const url = `${buildUrl(PATH)}${formatFilterAndSortOptions(options)}`;
  const token = await getTokenFromLocalStorage();
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Unauthorized';
    throw e;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  const e = new Error();
  e.code = response.status;
  throw e;
};

export const fetchList = async (id) => {
  const url = `${buildUrl(PATH)}/${id}`;
  const token = await getTokenFromLocalStorage();
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Unauthorized';
    throw e;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};

export const saveList = async (list) => {
  const url = list.listId
    ? `${buildUrl(PATH)}/${list.listId}`
    : `${buildUrl(PATH)}`;
  const token = await getTokenFromLocalStorage();
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Unauthorized';
    throw e;
  }
  const response = await fetch(url, {
    method: list.listId ? 'PUT' : 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
    body: JSON.stringify(list),
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};

export const deleteList = async (listId) => {
  const url = `${buildUrl(PATH)}/` + listId;
  const token = await getTokenFromLocalStorage();
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Unauthorized';
    throw e;
  }
  const response = await fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
  });

  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  if (response.status === 204) {
    return response.status;
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
};
