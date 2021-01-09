import { buildUrl, getTokenFromLocalStorage } from '../utils';
const PATH = '/stocks/find';

export const fetchStocks = async (searchTerm) => {
  const url = `${buildUrl(PATH)}/?text=${encodeURIComponent(searchTerm)}`;
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

export const fetchStock = async (id) => {
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
