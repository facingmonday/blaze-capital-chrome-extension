import { createSelector } from 'reselect';

/**
 * Direct selector to the alerts state domain
 */
export const selectAlertsDomain = (state) => state.alert;
export const selectAlertError = createSelector(
  selectAlertsDomain,
  ({ error }) => error
);
export const selectAlerts = createSelector(
  selectAlertsDomain,
  (alerts) => alerts.alerts
);
export const selectActiveAlert = createSelector(
  selectAlertsDomain,
  (alerts) => alerts.activeAlert
);
export const selectAlertLoading = createSelector(
  selectAlertsDomain,
  ({ loading }) => loading
);
export const selectAlertComplete = createSelector(
  selectAlertsDomain,
  ({ complete }) => complete
);
