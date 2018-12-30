import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_POSTS } from "./constants";
import { postsLoaded, postsLoadingError } from "./actions";


function* getPosts() {

  const requestURL = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const posts = yield call(axios.get, requestURL);
    yield put(postsLoaded(posts.data));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export default function* homeSaga() {
  yield takeLatest(LOAD_POSTS, getPosts)
}
