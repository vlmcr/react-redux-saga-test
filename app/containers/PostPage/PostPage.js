import React from 'react';

import Comment from 'components/Comment';
import LoadingIndicator from 'components/LoadingIndicator';

export default class PostPage extends React.Component {

  componentDidMount() {
    const postId = this.props.match.params.id;

    this.props.commentsLoad(postId);
    this.props.postLoad(postId);
  }

  componentWillUnmount() {
    this.props.clearStore();
  }

  isLoaded = (loading) => !loading.every(item => item);

  renderComments = (comments) => comments.map(data => <Comment key={data.id} {...data}/>);

  renderPost = (props) => (
    <div className="container post-page">
      <h1 className="post-page__title">{props.postData.title}</h1>

      <p className="post-page__author">
        {props.user.name} - {props.user.email}
      </p>

      <p className="post-page__content">{props.postData.body}</p>

      <div className="comments-list">
        {props.comments && this.renderComments(props.comments)}
      </div>
    </div>
  );

  render() {
    const isLoaded = this.isLoaded([
      this.props.postLoading,
      this.props.commentsLoading,
      this.props.useLoading
    ]);

    return (
      <main className="main">
        { isLoaded ? this.renderPost(this.props) : <LoadingIndicator/> }
      </main>
    )
  }
}
