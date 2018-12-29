import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posts')
);

export {
  selectHome,
  makeSelectPosts
};
