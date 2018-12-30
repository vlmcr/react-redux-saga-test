import React from 'react';

const Comment = (props) => (
  <div className="comment">
    <div className="comment__head">
      <p>{props.name}</p>
    </div>

    <p className="comment__text">{props.body}</p>
  </div>
);

export default Comment;
