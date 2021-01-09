import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import {
  selectAlertLoading,
  selectAlertError,
  selectAlertComplete,
  selectAlerts,
  selectActiveAlert,
} from '../../selectors/alert';
import { selectActiveStock } from '../../selectors/stock';

// Actions
import { fetchAlerts, fetchAlert, saveAlert } from '../../actions/alert';

// Component
import AlertForm from './AlertForm';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(AlertForm, {
    ...props,
    auth: useSelector(selectAuth),
    loading: useSelector(selectAlertLoading),
    complete: useSelector(selectAlertComplete),
    error: useSelector(selectAlertError),
    alert: useSelector(selectActiveAlert),
    alerts: useSelector(selectAlerts),
    activeStock: useSelector(selectActiveStock),
    fetchAlert: (id) => dispatch(fetchAlert(id)),
    fetchAlerts: () => dispatch(fetchAlerts()),
    saveAlert: (alert) => dispatch(saveAlert(alert)),
  });
};
