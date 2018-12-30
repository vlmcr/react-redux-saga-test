import React from 'react';

import Post from '../../components/Post';

export default class HomePage extends React.Component {

  componentDidMount() {
    this.props.postsLoad();
  }

  renderPosts = (posts) => posts.map(data => <Post key={data.id} {...data}/>);

  render() {
    const hasPosts = this.props.posts && this.props.posts.length;

    return (
      <main className="main">
        <div className="container posts">
          {hasPosts && this.renderPosts(this.props.posts)}
        </div>
      </main>
    )
  }
}
