import merge from 'deepmerge';
import { API_HOST } from '../constants/app';

export const setCookie = (name, value) =>
  window.localStorage.setItem(name, value);

export const getCookie = (name) => window.localStorage.getItem(name);

export const deleteCookie = (name) => window.localStorage.removeItem(name);

export const buildUrl = (path) => `${API_HOST}${path}`;

export const objectToEqualsString = (obj) =>
  `${Object.keys(obj)[0]}=${Object.values(obj)[0]}`;

export const flattenOptions = (options) => {
  let args = [];

  Object.keys(options).forEach((key) => {
    const option = options[key];
    if (option instanceof Array) {
      option.forEach((k) => {
        args = args.concat(
          flattenOptions(k).map((opt) => ({
            [`${key}.${Object.keys(opt)[0]}`]: Object.values(opt)[0],
          }))
        );
      });
    } else if (option !== null && typeof option !== 'undefined') {
      args.push({ [key]: option });
    }
  });
  return args;
};

export function formatFilterAndSortOptions(options = {}) {
  try {
    const flattenedOptions = flattenOptions(options);
    if (flattenedOptions && flattenedOptions.length) {
      return `?${flattenedOptions
        .map((option) => objectToEqualsString(option))
        .join('&')}`;
    }
    return '';
  } catch (e) {
    return '';
  }
}

export function mergeOptions(...args) {
  return merge.all(args);
}

export async function getTokenFromLocalStorage() {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(['token'], function (result) {
        if (result.token) {
          return resolve(result.token);
        }
        return resolve(null);
      });
    } catch (e) {
      reject(e);
    }
  });
}
export async function setTokenInLocalStorage(token) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ token }, function () {
        return resolve(null);
      });
    } catch (e) {
      reject(e);
    }
  });
}

export async function getHighlightedText() {
  return new Promise((resolve, reject) => {
    try {
      chrome.tabs.executeScript(
        {
          code: 'window.getSelection().toString();',
        },
        function (selection) {
          if (Array.isArray(selection) && selection[0]) {
            return resolve(selection[0]);
          }
          return resolve(null);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

export async function removeTokenFromLocalStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove('token', function () {
      resolve();
    });
  });
}
