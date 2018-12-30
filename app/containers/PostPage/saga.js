import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_COMMENTS, LOAD_POST, LOAD_USER } from './constants';
import {
  commentsLoadingError,
  commentsLoaded,
  postLoadingError,
  postLoaded,
  userLoad,
  userLoaded,
  userLoadingError
} from './actions';

function* getUser(action) {
  const requestUrl = `https://jsonplaceholder.typicode.com/users/${action.id}`;

  try {
    const user = yield call(axios.get, requestUrl);
    yield put(userLoaded(user.data));
  } catch (err) {
    yield put(userLoadingError(err));
  }}

function* getComments(action) {
  const requestUrl = `https://jsonplaceholder.typicode.com/comments?postId=${action.id}`;

  try {
    const comments = yield call(axios.get, requestUrl);

    yield put(commentsLoaded(comments.data));
  } catch (err) {
    yield put(commentsLoadingError(err));
  }
}

function* getPost(action) {

  const requestUrl = `https://jsonplaceholder.typicode.com/posts/${action.id}`;

  try {
    const post = yield call(axios.get, requestUrl);

    yield put(userLoad(post.data.userId));

    yield put(postLoaded(post.data));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

export default function* postSage() {
  yield takeLatest(LOAD_COMMENTS, getComments);
  yield takeLatest(LOAD_POST, getPost);
  yield takeLatest(LOAD_USER, getUser);
}
