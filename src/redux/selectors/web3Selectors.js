import { createSelector } from 'reselect';

const accounts = state => state.accounts;

export const getCoinbase = createSelector(
  accounts,
  payload => payload[0]
);
