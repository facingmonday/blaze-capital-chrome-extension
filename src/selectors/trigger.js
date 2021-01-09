import { createSelector } from 'reselect';

/**
 * Direct selector to the triggers state domain
 */
export const selectTriggersDomain = state => state.trigger;

/**
 * Sub Domain Selectors
 */
export const selectTriggers =
  createSelector(
    selectTriggersDomain,
    triggers => triggers.triggers,
  );
export const selectNewTrigger =
  createSelector(
    selectTriggersDomain,
    triggers => triggers.newTrigger,
  );
export const selectDeletedTrigger =
  createSelector(
    selectTriggersDomain,
    triggers => triggers.deletedTrigger,
  );
export const selectActiveTrigger =
  createSelector(
    selectTriggersDomain,
    triggers => triggers.activeTrigger,
  );

export const selectTriggersOptions = () =>
  createSelector(
    selectTriggers,
    triggersListObject => ({
      limit: triggersListObject.limit,
      offset: triggersListObject.offset,
      searchTerm: triggersListObject.searchTerm,
      filters: triggersListObject.filters,
      sort: triggersListObject.sort,
    }),
  );
