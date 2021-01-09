import {
  buildUrl,
  formatFilterAndSortOptions,
  getTokenFromLocalStorage,
} from '../utils';
const PATH = '/alerts';

export const fetchAlerts = async (options = {}) => {
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

export const fetchAlert = async (id) => {
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

/* {"stock":{"symbol":"<em>TSLA</em>","description":"TESLA INC","type":"stock","exchange":"NASDAQ","provider_id":"ice","typespecs":["common"],"country":"US"},"timeFrame":"ALL_TIMEFRAMES","stockPositionIndex":0,"searchStockName":"tsla","list":"5fd27f6c64150d54f72f5e05"}*/
/*
list: "5fc984b1baa3cf448967d170"
searchStockName: "TSLA"
stock: {symbol: "<em>TSLA</em>", description: "TESLA INC", type: "stock", exchange: "NASDAQ",…}
stockPositionIndex: 0
timeFrame: "1h"
*/

export const saveAlert = async (alert) => {
  const url = `${buildUrl(PATH)}`;
  const token = await getTokenFromLocalStorage();
  if (!token) {
    const e = new Error();
    e.code = 401;
    e.message = 'Unauthorized';
    throw e;
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    mode: 'cors',
    body: JSON.stringify(alert),
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
