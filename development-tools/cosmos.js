import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { ReduxMock } from 'react-cosmos-redux';
import { createStore } from 'redux';
import mock from './mock';

const reducer = state => ({ ...state });

export default ({ children }) => (
  <ReduxMock configureStore={state => createStore(reducer, state)} initialState={mock}>
    <Router>
      {React.Children.map(children, child => React.cloneElement(child, { history: { push: () => null } }))}
    </Router>
  </ReduxMock>
);
