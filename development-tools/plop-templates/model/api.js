import { COOKIE_NAME } from '../../config/constants';
import { buildUrl, getCookie, formatFilterAndSortOptions } from '../utils';
const PATH = '/{{camelCaseName}}s';

export const fetch{{PascalCase}}s = async (options = {}) => {
  const url = `${buildUrl(PATH)}${formatFilterAndSortOptions(options)}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
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

export const fetch{{PascalCase}} = async id => {
  const url = `${buildUrl(PATH)}/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
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

export const save{{PascalCase}} = async {{camelCaseName}} => {
  const url = {{camelCaseName}}.{{camelCaseName}}Id ? `${buildUrl(PATH)}/${ {{camelCaseName}}.{{camelCaseName}}Id}` : `${buildUrl(PATH)}`;
  const response = await fetch(url, {
    method: {{camelCaseName}}.{{camelCaseName}}Id ? 'PUT' : 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
    body: JSON.stringify({{camelCaseName}}),
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

export const delete{{PascalCase}} = async {{camelCaseName}}Id => {
  const url = `${buildUrl(PATH)}/` + {{camelCaseName}}Id;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
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
