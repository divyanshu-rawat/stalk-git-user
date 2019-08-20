import { put, takeLatest, all, call } from "redux-saga/effects";
import * as t from "../../Constants";
import * as api from "../../API";

function* getApiData(action) {
  const { username } = action;
  try {
    const data = yield call(api.getApiData, username);
    yield put({ type: t.SET_GITHUB_API_DATA, data });
  } catch (err) {
    return new Promise(reject => reject(err));
  }
}

function* getApiDataWatcher() {
  yield takeLatest(t.GET_GITHUB_API_DATA, getApiData);
}

export default function* sagas() {
  yield all([getApiDataWatcher()]);
}
