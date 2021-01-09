import { combineReducers } from 'redux';
import AlertReducer from './alert';
import AppReducer from './app';
import AuthReducer from './auth';
import ListReducer from './list';
import StatReducer from './stat';
import StockReducer from './stock';

import StateKeysReducer from './stateKeys';

const rootReducer = () =>
  combineReducers({
    stateKeys: StateKeysReducer,
    alert: AlertReducer,
    app: AppReducer,
    auth: AuthReducer,
    list: ListReducer,
    stat: StatReducer,
    stock: StockReducer,
  });

export default rootReducer;
