import {
  LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS, CLEAR_COMMENTS,
  LOAD_POST, LOAD_POST_ERROR, LOAD_POST_SUCCESS, CLEAR_POST,
  LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS, CLEAR_USER
} from "./constants";


export function commentsLoad(id) {
  return {
    type: LOAD_COMMENTS,
    id
  }
}

export function commentsLoaded(comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    comments
  }
}

export function commentsLoadingError(error) {
  return {
    type: LOAD_COMMENTS_ERROR,
    error
  }
}

export function clearComments() {
  return {
    type: CLEAR_COMMENTS
  }
}


export function postLoad(id) {
  return {
    type: LOAD_POST,
    id
  }
}

export function postLoaded(post) {
  return {
    type: LOAD_POST_SUCCESS,
    post
  }
}

export function postLoadingError(error) {
  return {
    type: LOAD_POST_ERROR,
    error
  }
}

export function clearPost() {
  return {
    type: CLEAR_POST
  }
}

export function userLoad(id) {
  return {
    type: LOAD_USER,
    id
  }
}

export function userLoaded(user) {
  return {
    type: LOAD_USER_SUCCESS,
    user
  }
}

export function userLoadingError(error) {
  return {
    type: LOAD_USER_ERROR,
    error
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER
  }
}
