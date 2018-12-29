import React from 'react';

import Post from '../../components/Post';

export default class HomePage extends React.Component {

  componentDidMount() {
    this.props.postsLoad();
  }

  renderPosts = (posts) => posts.data.map(data => <Post key={data.id} {...data}/>);

  render() {
    const hasPosts = this.props.posts && this.props.posts.data.length;
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
