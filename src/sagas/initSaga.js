import { takeLatest, put } from 'redux-saga/effects';
import { getTokenList } from '../services/ethPlorer';
import { START_INIT_APP } from '../redux/constants';
import { fetchTokenList } from '../redux/actions';

function* initApp(action) {
  try {
    const tokenList = yield getTokenList('0x86f7aa79744de79dab78eb2795cf26bed884640f');
    yield put(fetchTokenList(tokenList));
  } catch (err) {
    console.log(err);
  }
}

export default function* initSaga() {
  yield takeLatest(START_INIT_APP, initApp)
}
