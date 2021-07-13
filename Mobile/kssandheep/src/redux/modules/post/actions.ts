import types from './types';

export const getPostDetails = (id: number) => ({
  'type': types.GET_POST_DETAILS_REQUEST,
  id
});

export const getPostDetailsSuccess = () => ({
  'type': types.GET_POST_DETAILS_SUCCESS,
});

export const getPosts = () => ({
  'type': types.GET_POSTS_REQUEST,
});

export const getPostsSuccess = (list: []) => ({
  'type': types.GET_POSTS_SUCCESS,
  list
});
