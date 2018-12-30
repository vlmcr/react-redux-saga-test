import { fromJS } from 'immutable';

import {
  LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, CLEAR_COMMENTS,
  LOAD_POST, LOAD_POST_ERROR, LOAD_POST_SUCCESS, CLEAR_POST,
  LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS, CLEAR_USER
} from "./constants";

const initialState = fromJS({
  comments: {
    loading: false,
    error: false,
    list: false
  },
  post: {
    loading: false,
    error: false,
    data: false
  },
  user: {
    loading: false,
    error: false,
    data: false
  }
});


function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return state
        .setIn(['comments', 'loading'], true)
        .setIn(['comments', 'error'], false);
    case LOAD_COMMENTS_SUCCESS:
      return state
        .setIn(['comments', 'loading'], false)
        .setIn(['comments', 'error'], false)
        .setIn(['comments', 'list'], action.comments);
    case LOAD_COMMENTS_ERROR:
      return state
        .setIn(['comments', 'loading'], false)
        .setIn(['comments', 'error'], action.error);
    case CLEAR_COMMENTS:
      return state
        .setIn(['comments', 'list'], false);

    case LOAD_POST:
      return state
        .setIn(['loading'], true)
        .setIn(['error'], false);
    case LOAD_POST_SUCCESS:
      return state
        .setIn(['post', 'loading'], false)
        .setIn(['post', 'error'], false)
        .setIn(['post', 'data'], action.post);
    case LOAD_POST_ERROR:
      return state
        .setIn(['post', 'loading'], false)
        .setIn(['post', 'error'], action.error);
    case CLEAR_POST:
      return state
        .setIn(['post', 'data'], false);

    case LOAD_USER:
      return state
        .setIn(['user', 'loading'], true)
        .setIn(['user', 'error'], false);
    case LOAD_USER_SUCCESS:
      return state
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], false)
        .setIn(['user', 'data'], action.user);
    case LOAD_USER_ERROR:
      return state
        .setIn(['user', 'loading'], false)
        .setIn(['user', 'error'], action.error);
    case CLEAR_USER:
      return state
        .setIn(['user', 'data'], false);

    default:
      return state;
  }
}


export default postReducer;
