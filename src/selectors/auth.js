import { createSelector } from 'reselect';

const selectAuthDomain = (state) => state.auth;

export const selectAuth = createSelector(selectAuthDomain, (auth) => ({
  ...auth,
}));
export const selectToken = createSelector(selectAuth, ({ token }) => token);
export const selectLoading = createSelector(
  selectAuth,
  ({ loading }) => loading
);
export const selectError = createSelector(selectAuth, ({ error }) => error);
