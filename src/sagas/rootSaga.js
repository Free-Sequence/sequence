import { all, fork } from 'redux-saga/effects';
import { watchProductCommands } from './cardSaga';

export default function* rootSaga() {
  yield all([fork(watchProductCommands)]);
}
