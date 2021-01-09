import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectActiveAlert } from '../../selectors/alert';

// Actions
import { updateActiveAlert } from '../../actions/alert';

// Component
import TimeframeSelect from './TimeframeSelect';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(TimeframeSelect, {
    ...props,
    auth: useSelector(selectAuth),
    activeAlert: useSelector(selectActiveAlert),
    updateActiveAlert: (alert) => dispatch(updateActiveAlert(alert)),
  });
};
