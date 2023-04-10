import { call, put, takeLatest } from "redux-saga/effects";
import { login, profile, register, updateProfile } from "../../helpers/BackendHelper";
import { LOGIN, PROFILE, REGISTER, UPDATE_PROFILE } from "../actionTypes";
import {
  loginFailAction,
  loginSucessAction,
  profileFailAction,
  profileSucessAction,
  registerFailAction,
  registerSucessAction,
  updateProfileFailAction,
  updateProfileSucessAction,
} from "../actions/userActions";

/**
 * Register function
 * @param {*} action 
 */
function* onRegister(action) {
  try {
    const response = yield call(register, action.payload);
    yield put(registerSucessAction(response));
  } catch (error) {
    yield put(registerFailAction(error.response));
  }
}

/**
 * Login function
 * @param {*} action 
 */
function* onLogin(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(loginSucessAction(response));
  } catch (error) {
    yield put(loginFailAction(error.response));
  }
}

/**
 * View profile function
 * @param {*} action 
 */
function* onProfile(action) {
  try {
    const response = yield call(profile, action.payload);
    yield put(profileSucessAction(response));
  } catch (error) {
    yield put(profileFailAction(error.response));
  }
}

/**
 * Update profile function
 * @param {*} action 
 */
function* onUpdateProfile(action) {
  try {
    const response = yield call(updateProfile, action.payload);
    yield put(updateProfileSucessAction(response));
  } catch (error) {
    yield put(updateProfileFailAction(error.response));
  }
}

function* userSaga() {
  yield takeLatest(REGISTER, onRegister);
  yield takeLatest(LOGIN, onLogin);
  yield takeLatest(PROFILE, onProfile);
  yield takeLatest(UPDATE_PROFILE, onUpdateProfile);
}

export default userSaga;
