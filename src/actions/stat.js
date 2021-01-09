import {
  FETCH_STAT,
  FETCH_STAT_SUCCESS,
  FETCH_STAT_FAILURE,
  FETCH_STATS,
  FETCH_STATS_SUCCESS,
  FETCH_STATS_FAILURE,
  SAVE_STAT,
  SAVE_STAT_SUCCESS,
  SAVE_STAT_FAILURE,
  UPDATE_ACTIVE_STAT,
  RESET_ACTIVE_STAT,
  DELETE_STAT,
  DELETE_STAT_SUCCESS,
  DELETE_STAT_FAILURE,
} from '../constants/stat';

export function fetchStat(statId) {
  return {
    type: FETCH_STAT,
    statId,
  };
}
export function fetchStatSuccess(stat) {
  return {
    type: FETCH_STAT_SUCCESS,
    stat,
  };
}
export function fetchStatFailure(error) {
  return {
    type: FETCH_STAT_FAILURE,
    error,
  };
}
export function fetchStats(options) {
  return {
    type: FETCH_STATS,
    options,
  };
}
export function fetchStatsSuccess(response) {
  return {
    type: FETCH_STATS_SUCCESS,
    response,
  };
}
export function fetchStatsFailure(error) {
  return {
    type: FETCH_STATS_FAILURE,
    error,
  };
}
export function saveStat(stat) {
  return {
    type: SAVE_STAT,
    stat,
  };
}
export function saveStatSuccess(stat) {
  return {
    type: SAVE_STAT_SUCCESS,
    stat,
  };
}
export function saveStatFailure(error) {
  return {
    type: SAVE_STAT_FAILURE,
    error,
  };
}
export function updateActiveStat(stat) {
  return {
    type: UPDATE_ACTIVE_STAT,
    stat,
  };
}
export function resetActiveStat(data) {
  return {
    type: RESET_ACTIVE_STAT,
    data,
  };
}
export function deleteStat(statId) {
  return {
    type: DELETE_STAT,
    statId,
  };
}
export function deleteStatSuccess(stat) {
  return {
    type: DELETE_STAT_SUCCESS,
    stat,
  };
}
export function deleteStatFailure(error) {
  return {
    type: DELETE_STAT_FAILURE,
    error,
  };
}
