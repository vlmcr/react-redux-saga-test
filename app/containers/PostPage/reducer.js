import { fromJS } from 'immutable';

import {
  LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, CLEAR_COMMENTS,
  LOAD_POST, LOAD_POST_ERROR, LOAD_POST_SUCCESS, CLEAR_POST,
  LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS, CLEAR_USER
} from "./constants";

const initialState = fromJS({
  loading: false,
  error: false,
  comments: false,
  post: false,
  user: false
});


function postReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_COMMENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('comments', action.comments);
    case LOAD_COMMENTS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case CLEAR_COMMENTS:
      return state
        .set('comments', false);

    case LOAD_POST:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('post', action.post);
    case LOAD_POST_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case CLEAR_POST:
      return state
        .set('post', false);

    case LOAD_USER:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_USER_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('user', action.user);
    case LOAD_USER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    case CLEAR_USER:
      return state
        .set('comments', false);

    default:
      return state;
  }
}


export default postReducer;
