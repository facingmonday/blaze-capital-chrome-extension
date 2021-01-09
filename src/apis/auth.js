import { buildUrl, getCookie } from '../utils';

export async function fetchMe() {
  const url = buildUrl('/users/me');
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
    timeout: 5000,
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  const e = new Error();
  e.code = response.status;
  throw e;
}

export async function loginUser(credentials) {
  const url = buildUrl('/auth/local/login');
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(credentials),
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  const e = new Error();
  e.code = response.status;
  e.message = response.statusText;
  throw e;
}
