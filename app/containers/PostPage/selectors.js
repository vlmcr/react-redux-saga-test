import { createSelector } from 'reselect';

const selectPost = (state) => state.get('post');

const makeSelectPost = () => createSelector(
  selectPost,
  (postState) => postState.get('post')
);

const makeSelectComments = () => createSelector(
  selectPost,
  (postState) => postState.get('comments')
);

const makeSelectUser = () => createSelector(
  selectPost,
  (postState) => postState.get('user')
);

export {
  selectPost,
  makeSelectPost,
  makeSelectComments,
  makeSelectUser
}
