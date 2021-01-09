import { createSelector } from 'reselect';
import { createSelector as createORMSelector } from 'redux-orm';
import orm from '../store/orm';

// ORM Selectors
export const selectAll{{PascalCase}}sFromORM = createORMSelector(orm, session => session.{{PascalCase}}.all().toRefArray());
export const selectAll{{PascalCase}}s = createSelector(selectAll{{PascalCase}}sFromORM, {{camelCaseName}}s => {{camelCaseName}}s);
export const select{{PascalCase}}FromORMById = id => createORMSelector(orm, session => session.{{PascalCase}}.withId(id));
export const select{{PascalCase}}ById = () =>
  createSelector(
    selectAll{{PascalCase}}s,
    (_, props) => props,
    ({{camelCaseName}}s, props) => ({{camelCaseName}}s?.length ? {{camelCaseName}}s.find(u => u.id == props.id) : null),
  );
