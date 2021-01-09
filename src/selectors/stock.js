import { createSelector } from 'reselect';

/**
 * Direct selector to the stocks state domain
 */
export const selectStocksDomain = (state) => state.stock;
export const selectStockLoading = createSelector(
  selectStocksDomain,
  ({ loading }) => loading
);
export const selectStockError = createSelector(
  selectStocksDomain,
  ({ error }) => error
);
/**
 * Sub Domain Selectors
 */
export const selectStocks = createSelector(
  selectStocksDomain,
  (stocks) => stocks.stocks
);
export const selectNewStock = createSelector(
  selectStocksDomain,
  (stocks) => stocks.newStock
);
export const selectDeletedStock = createSelector(
  selectStocksDomain,
  (stocks) => stocks.deletedStock
);
export const selectActiveStock = createSelector(
  selectStocksDomain,
  (stocks) => stocks.activeStock
);

export const selectStocksOptions = () =>
  createSelector(selectStocks, (stocksListObject) => ({
    limit: stocksListObject.limit,
    offset: stocksListObject.offset,
    searchTerm: stocksListObject.searchTerm,
    filters: stocksListObject.filters,
    sort: stocksListObject.sort,
  }));
