import {
  FETCH_STOCK,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE,
  FETCH_STOCKS,
  FETCH_STOCKS_SUCCESS,
  FETCH_STOCKS_FAILURE,
  SAVE_STOCK,
  SAVE_STOCK_SUCCESS,
  SAVE_STOCK_FAILURE,
  UPDATE_ACTIVE_STOCK,
  RESET_ACTIVE_STOCK,
  DELETE_STOCK,
  DELETE_STOCK_SUCCESS,
  DELETE_STOCK_FAILURE,
  RESET_STOCK,
  SET_ACTIVE_STOCK,
} from '../constants/stock';

export function fetchStock(stockId) {
  return {
    type: FETCH_STOCK,
    stockId,
  };
}
export function fetchStockSuccess(stock) {
  return {
    type: FETCH_STOCK_SUCCESS,
    stock,
  };
}
export function fetchStockFailure(error) {
  return {
    type: FETCH_STOCK_FAILURE,
    error,
  };
}
export function fetchStocks(searchTerm) {
  return {
    type: FETCH_STOCKS,
    searchTerm,
  };
}
export function fetchStocksSuccess(response) {
  return {
    type: FETCH_STOCKS_SUCCESS,
    response,
  };
}
export function fetchStocksFailure(error) {
  return {
    type: FETCH_STOCKS_FAILURE,
    error,
  };
}
export function saveStock(stock) {
  return {
    type: SAVE_STOCK,
    stock,
  };
}
export function saveStockSuccess(stock) {
  return {
    type: SAVE_STOCK_SUCCESS,
    stock,
  };
}
export function saveStockFailure(error) {
  return {
    type: SAVE_STOCK_FAILURE,
    error,
  };
}
export function updateActiveStock(stock) {
  return {
    type: UPDATE_ACTIVE_STOCK,
    stock,
  };
}
export function resetActiveStock(data) {
  return {
    type: RESET_ACTIVE_STOCK,
    data,
  };
}
export function deleteStock(stockId) {
  return {
    type: DELETE_STOCK,
    stockId,
  };
}
export function deleteStockSuccess(stock) {
  return {
    type: DELETE_STOCK_SUCCESS,
    stock,
  };
}
export function deleteStockFailure(error) {
  return {
    type: DELETE_STOCK_FAILURE,
    error,
  };
}
export function resetStock() {
  return {
    type: RESET_STOCK,
  };
}
export function setActiveStock(stock) {
  return {
    type: SET_ACTIVE_STOCK,
    stock,
  };
}
