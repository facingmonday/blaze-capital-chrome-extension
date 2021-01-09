import { createSelector } from 'reselect';

const selectAuthDomain = (state) => state.app;

export const selectLoading = createSelector(
  selectAuthDomain,
  ({ loading }) => loading
);
