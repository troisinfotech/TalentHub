// @ts-nocheck 
import { all, takeLatest, call, put } from "redux-saga/effects";
import fetchUserProfile from "../../../apis/fetchUserProfile";
import login from "../../../apis/login";
import { removetoken, settoken } from "../../../services/storage.service";

import { getUserProfileSuccess, loginSuccess, loginFailure, logoutSuccess } from "./actions";
import types from "./types";


export function* loginSaga(action: any) {
  try {
    const token = yield call(login, action.user);

    if (token) {

      yield put(loginSuccess());

      settoken(token)
    } else {
      yield put(loginFailure("Invalid Credentials"));

    }


  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* getUserProfileSage(action: any) {
  try {
    const userProfile = yield call(fetchUserProfile);

    if (userProfile) {
      yield put(getUserProfileSuccess(userProfile));
    }

  } catch (err) {
    console.log(`\n getUserProfileSage error---`, err)
  }
}

export function* logoutSaga(action: any) {
  try {
    removetoken()
    yield put(logoutSuccess());


  } catch (err) {
    yield put(loginFailure(err));
  }
}

export default function* userRootSaga() {
  yield all([
    yield takeLatest(types.LOGIN_REQUEST, loginSaga),
    yield takeLatest(types.GET_USER_PROFILE_REQUEST, getUserProfileSage),
    yield takeLatest(types.LOGOUT_REQUEST, logoutSaga),

  ]);
}
