import { createSelector } from 'reselect';

const selectPost = (state) => state.get('post');

const makeSelectPost = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['post', 'data'])
);

const makeSelectPostLoading = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['post', 'loading'])
);


const makeSelectComments = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['comments', 'list'])
);

const makeSelectCommentsLoading = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['comments', 'loading'])
);


const makeSelectUser = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['user', 'data'])
);

const makeSelectUserLoading = () => createSelector(
  selectPost,
  (postState) => postState.getIn(['user', 'loading'])
);

export {
  selectPost,
  makeSelectPost,
  makeSelectComments,
  makeSelectUser,
  makeSelectPostLoading,
  makeSelectCommentsLoading,
  makeSelectUserLoading
}
