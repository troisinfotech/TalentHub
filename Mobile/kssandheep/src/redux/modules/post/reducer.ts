import { PostState } from './interface';
import types from './types';

export const initialState: PostState = {
  list: undefined,
  details: undefined
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        list: action.list
      }
    case types.GET_POST_DETAILS_SUCCESS:

      return {
        ...state,
        details: action.details
      }
    default:
      return state;
  }
}

export default reducer;