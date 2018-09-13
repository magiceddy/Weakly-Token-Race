import { all, fork } from 'redux-saga/effects';
import { drizzleSagas } from 'drizzle';
import initSaga from './initSaga';

export default function* sagas() {
  yield all([
    drizzleSagas.map(saga => fork(saga)),
    initSaga()
  ]);
}
