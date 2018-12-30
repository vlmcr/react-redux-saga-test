import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => (
  <Link className="post" to={`/post/${props.id}`}>
    <h5 className="post__title">{props.title}</h5>

    <p className="post__description">{props.body}</p>
  </Link>
);

export default Post;
