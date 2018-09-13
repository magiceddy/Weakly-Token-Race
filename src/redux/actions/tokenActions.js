import { FETCH_TOKEN_LIST } from '../constants';

export function fetchTokenList(tokenList) {
  return ({ type: FETCH_TOKEN_LIST, payload: tokenList });
}
