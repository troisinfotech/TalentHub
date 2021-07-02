import { combineReducers } from 'redux';
import { UserState } from './modules/user/interface';
import user from './modules/user/reducer';
// import survey from './modules/survey/reducer';
import post from './modules/post/reducer';

const rootReducer = combineReducers({
  user,
  //  survey,
  post
});

export default rootReducer;
