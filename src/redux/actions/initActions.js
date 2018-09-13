import { START_INIT_APP } from '../constants';

export function initApp(coinbase) {
  return ({ type: START_INIT_APP, payload: coinbase })
}
