import React from 'react';

import Comment from 'components/Comment';

export default class PostPage extends React.Component {

  componentDidMount() {
    const postId = this.props.match.params.id;

    this.props.commentsLoad(postId);
    this.props.postLoad(postId);
  }

  componentWillUnmount() {
    this.props.clearStore();
  }

  renderComments = (comments) => comments.map(data => <Comment key={data.id} {...data}/>);

  render() {
    return (
      <main className="main">
        <div className="container post-page">
          <h1 className="post-page__title">{this.props.postData.title}</h1>

          <p className="post-page__author">{this.props.user.name} - {this.props.user.email}</p>

          <p className="post-page__content">{this.props.postData.body}</p>

          <div className="comments-list">
            {this.props.comments && this.renderComments(this.props.comments)}
          </div>
        </div>
      </main>
    )
  }
}
