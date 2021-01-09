import { LOAD_APP, LOAD_APP_COMPLETE } from '../constants/app';

export function loadApp() {
  return {
    type: LOAD_APP,
  };
}
export function loadAppComplete(token) {
  return {
    type: LOAD_APP_COMPLETE,
    token,
  };
}
