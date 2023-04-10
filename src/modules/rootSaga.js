import { all, fork } from "redux-saga/effects";

import UserSaga from "./saga/userSaga";

export default function* rootSaga() {
  yield all([fork(UserSaga)]);
}
