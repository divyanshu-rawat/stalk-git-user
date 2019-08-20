import { fork, all } from 'redux-saga/effects';
import userProfileSaga from "./Sagas/userProfileSaga";

export default function* rootSaga() {
  yield all([
      fork(userProfileSaga),
  ]);
}