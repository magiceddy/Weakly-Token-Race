import { createSelector } from 'reselect';

const tokenList = state => state.token.list;

export const getTokenList = createSelector(
  tokenList,
  payload => payload
);
