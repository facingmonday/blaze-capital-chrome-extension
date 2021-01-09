import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import { selectLists, selectActiveList } from '../../selectors/list';

// Actions
import { fetchLists } from '../../actions/list';
import { updateActiveAlert } from '../../actions/alert';

// Component
import ListSelect from './ListSelect';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(ListSelect, {
    ...props,
    auth: useSelector(selectAuth),
    activeList: useSelector(selectActiveList),
    lists: useSelector(selectLists),
    fetchLists: () => dispatch(fetchLists()),
    updateActiveAlert: (alert) => dispatch(updateActiveAlert(alert)),
  });
};
