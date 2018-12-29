import React from 'react';

import Post from '../../components/Post';

export default class Home extends React.Component {

  renderPosts = (posts) => posts.map(post => <Post data={post}/>);

  render() {
    const hasPosts = this.props.posts && this.props.posts.length;
    const failMessage = (<h3>There is no posts</h3>);

    return (
      <main className="main">
        <div className="posts">
          {hasPosts
            ? this.renderPosts(this.props.posts)
            : failMessage
          }
        </div>
      </main>
    )
  }
}
