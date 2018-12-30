import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { clearComments, clearUser, clearPost, commentsLoad, postLoad } from './actions';
import { makeSelectComments, makeSelectPost, makeSelectUser } from "./selectors";
import saga from './saga';
import reducer from './reducer';

import PostPage from './PostPage';

const mapDispatchToProps = (dispatch) => ({
  commentsLoad: (id) => dispatch(commentsLoad(id)),
  postLoad: (id) => dispatch(postLoad(id)),
  clearStore: () => dispatch(clearPost()) && dispatch(clearUser()) && dispatch(clearComments())
});

const mapStateToProps = () => createStructuredSelector({
  comments: makeSelectComments(),
  postData: makeSelectPost(),
  user: makeSelectUser()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'post', reducer });
const withSaga = injectSaga({ key: 'post', saga });

export default compose(withReducer, withSaga, withConnect)(PostPage);
export { mapStateToProps };
