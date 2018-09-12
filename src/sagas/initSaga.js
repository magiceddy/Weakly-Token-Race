import { takeLatest } from 'redux-saga/effects';
import { START_INIT_APP } from '../redux/constants';

function * initApp (action) {
  try {
    const pippo = yield 0;
    console.log(pippo);
  } catch (err) {
    console.log(err);
  }
}

export default function * initSaga () {
  yield takeLatest(START_INIT_APP, initApp)
}
