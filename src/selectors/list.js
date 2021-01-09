import { createSelector } from 'reselect';

/**
 * Direct selector to the lists state domain
 */
export const selectListsDomain = state => state.list;

/**
 * Sub Domain Selectors
 */
export const selectLists =
  createSelector(
    selectListsDomain,
    lists => lists.lists,
  );
export const selectNewList =
  createSelector(
    selectListsDomain,
    lists => lists.newList,
  );
export const selectDeletedList =
  createSelector(
    selectListsDomain,
    lists => lists.deletedList,
  );
export const selectActiveList =
  createSelector(
    selectListsDomain,
    lists => lists.activeList,
  );

export const selectListsOptions = () =>
  createSelector(
    selectLists,
    listsListObject => ({
      limit: listsListObject.limit,
      offset: listsListObject.offset,
      searchTerm: listsListObject.searchTerm,
      filters: listsListObject.filters,
      sort: listsListObject.sort,
    }),
  );
