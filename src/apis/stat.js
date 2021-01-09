import {
  buildUrl,
  getCookie,
  formatFilterAndSortOptions,
  getTokenFromLocalStorage,
} from '../utils';
const PATH = '/users/profile/stats';

export const fetchStats = async (options = {}) => {
  const url = `${buildUrl(PATH)}${formatFilterAndSortOptions(options)}`;
  const token = await getTokenFromLocalStorage();
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
