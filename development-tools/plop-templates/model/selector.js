import { createSelector } from 'reselect';

/**
 * Direct selector to the {{camelCaseName}}s state domain
 */
export const select{{PascalCase}}sDomain = state => state.{{camelCaseName}};

/**
 * Sub Domain Selectors
 */
export const select{{PascalCase}}s =
  createSelector(
    select{{PascalCase}}sDomain,
    {{camelCaseName}}s => {{camelCaseName}}s.{{camelCaseName}}s,
  );
export const selectNew{{PascalCase}} =
  createSelector(
    select{{PascalCase}}sDomain,
    {{camelCaseName}}s => {{camelCaseName}}s.new{{PascalCase}},
  );
export const selectDeleted{{PascalCase}} =
  createSelector(
    select{{PascalCase}}sDomain,
    {{camelCaseName}}s => {{camelCaseName}}s.deleted{{PascalCase}},
  );
export const selectActive{{PascalCase}} =
  createSelector(
    select{{PascalCase}}sDomain,
    {{camelCaseName}}s => {{camelCaseName}}s.active{{PascalCase}},
  );

export const select{{PascalCase}}sOptions = () =>
  createSelector(
    select{{PascalCase}}s,
    {{camelCaseName}}sListObject => ({
      limit: {{camelCaseName}}sListObject.limit,
      offset: {{camelCaseName}}sListObject.offset,
      searchTerm: {{camelCaseName}}sListObject.searchTerm,
      filters: {{camelCaseName}}sListObject.filters,
      sort: {{camelCaseName}}sListObject.sort,
    }),
  );
