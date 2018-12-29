import React from 'react';

const Post = (props) => (
  <div className="post">
    <img className="post__img-preview"/>

    <h5 className="post__title">{props.title}</h5>

    <p className="post__description">{props.body}</p>
  </div>
);

export default Post;
