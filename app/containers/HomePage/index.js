import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { postsLoad } from './actions';
import { makeSelectPosts } from './selectors';
import reducer from './reducer';
import saga from './saga';

import HomePage from './HomePage';


const mapDispatchToProps = (dispatch) => ({
  postsLoad: () => dispatch(postsLoad())
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };

