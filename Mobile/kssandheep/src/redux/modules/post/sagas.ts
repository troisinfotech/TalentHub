// @ts-nocheck 
import { all, takeLatest, call, put } from "redux-saga/effects";
import fetchPostDetails from "../../../apis/fetchPostDetails";
import fetchPosts from "../../../apis/fetchPosts";

import { getPostDetailsSuccess, getPostsSuccess } from "./actions";
import types from "./types";


export function* getPostsSaga(action: any) {
  try {
    const posts = yield call(fetchPosts);

    yield put(getPostsSuccess(posts));

  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* getPostDetailsSaga(action: any) {
  try {
    const details = yield call(fetchPostDetails, action.id);


    yield put(getPostDetailsSuccess(details));

  } catch (err) {
    console.log(`\n getPostDetailSuccess error---`, err)
  }
}

console.log(`\n getPostDetailSuccess error---`)

export default function* postRootSaga() {
  yield all([
    yield takeLatest(types.GET_POSTS_REQUEST, getPostsSaga),
    yield takeLatest(types.GET_POST_DETAILS_REQUEST, getPostDetailsSaga),
  ]);
}
