import {
  FETCH_ALERT,
  FETCH_ALERT_SUCCESS,
  FETCH_ALERT_FAILURE,
  FETCH_ALERTS,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE,
  SAVE_ALERT,
  SAVE_ALERT_SUCCESS,
  SAVE_ALERT_FAILURE,
  UPDATE_ACTIVE_ALERT,
  RESET_ACTIVE_ALERT,
  DELETE_ALERT,
  DELETE_ALERT_SUCCESS,
  DELETE_ALERT_FAILURE,
  RESET_ALERT,
} from '../constants/alert';

export function fetchAlert(alertId) {
  return {
    type: FETCH_ALERT,
    alertId,
  };
}
export function fetchAlertSuccess(alert) {
  return {
    type: FETCH_ALERT_SUCCESS,
    alert,
  };
}
export function fetchAlertFailure(error) {
  return {
    type: FETCH_ALERT_FAILURE,
    error,
  };
}
export function fetchAlerts(options) {
  return {
    type: FETCH_ALERTS,
    options,
  };
}
export function fetchAlertsSuccess(response) {
  return {
    type: FETCH_ALERTS_SUCCESS,
    response,
  };
}
export function fetchAlertsFailure(error) {
  return {
    type: FETCH_ALERTS_FAILURE,
    error,
  };
}
export function saveAlert(alert) {
  return {
    type: SAVE_ALERT,
    alert,
  };
}
export function saveAlertSuccess(alert) {
  return {
    type: SAVE_ALERT_SUCCESS,
    alert,
  };
}
export function saveAlertFailure(error) {
  return {
    type: SAVE_ALERT_FAILURE,
    error,
  };
}
export function updateActiveAlert(alert) {
  return {
    type: UPDATE_ACTIVE_ALERT,
    alert,
  };
}
export function resetActiveAlert(data) {
  return {
    type: RESET_ACTIVE_ALERT,
    data,
  };
}
export function deleteAlert(alertId) {
  return {
    type: DELETE_ALERT,
    alertId,
  };
}
export function deleteAlertSuccess(alert) {
  return {
    type: DELETE_ALERT_SUCCESS,
    alert,
  };
}
export function deleteAlertFailure(error) {
  return {
    type: DELETE_ALERT_FAILURE,
    error,
  };
}
export function resetAlert() {
  return {
    type: RESET_ALERT,
  };
}
