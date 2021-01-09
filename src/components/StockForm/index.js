import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Selectors
import { selectAuth } from '../../selectors/auth';
import {
  selectStocks,
  selectActiveStock,
  selectStockError,
  selectStockLoading,
} from '../../selectors/stock';

// Actions
import { fetchStocks, setActiveStock } from '../../actions/stock';
import { updateActiveAlert } from '../../actions/alert';

// Component
import StockForm from './StockForm';

export default (props) => {
  const dispatch = useDispatch();
  return React.createElement(StockForm, {
    ...props,
    auth: useSelector(selectAuth),
    activeStock: useSelector(selectActiveStock),
    error: useSelector(selectStockError),
    loading: useSelector(selectStockLoading),
    stocks: useSelector(selectStocks),
    fetchStocks: (searchTerm) => dispatch(fetchStocks(searchTerm)),
    setActiveStock: (stock) => dispatch(setActiveStock(stock)),
    updateActiveAlert: (alert) => dispatch(updateActiveAlert(alert)),
  });
};
