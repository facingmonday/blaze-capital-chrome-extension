import { createSelector } from 'reselect';

/**
 * Direct selector to the stats state domain
 */
export const selectStatsDomain = state => state.stat;

/**
 * Sub Domain Selectors
 */
export const selectStats =
  createSelector(
    selectStatsDomain,
    stats => stats.stats,
  );
export const selectNewStat =
  createSelector(
    selectStatsDomain,
    stats => stats.newStat,
  );
export const selectDeletedStat =
  createSelector(
    selectStatsDomain,
    stats => stats.deletedStat,
  );
export const selectActiveStat =
  createSelector(
    selectStatsDomain,
    stats => stats.activeStat,
  );

export const selectStatsOptions = () =>
  createSelector(
    selectStats,
    statsListObject => ({
      limit: statsListObject.limit,
      offset: statsListObject.offset,
      searchTerm: statsListObject.searchTerm,
      filters: statsListObject.filters,
      sort: statsListObject.sort,
    }),
  );
