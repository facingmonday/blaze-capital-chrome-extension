import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';

// Actions
import { fetchMe, loginUser } from '../../actions/auth';

// Component
import LoginForm from './LoginForm';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(LoginForm, {
    ...props,
    auth: useSelector(selectAuth),
    fetchMe: () => dispatch(fetchMe()),
    loginUser: (credentials) => dispatch(loginUser(credentials)),
  });
};
