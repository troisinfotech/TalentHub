import { all, fork } from 'redux-saga/effects';
import user from '../redux/modules/user/sagas';
import post from '../redux/modules/post/sagas';

export default function* rootSaga() {
 yield all([
  fork(user),
  fork(post),
 ]);
}
