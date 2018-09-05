import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => {
    return (
      <div className="card col-sm-12" key={i}>
        <CommentCard
          // commentId={comment.id}
          commentNum={i}
          propicPath={comment.profilePic}
          role={comment.role}
          username={comment.display_name}
          dateTime={comment.created_at}
          commentContent={comment.content}
          commentImagePath={comment.image_path}
        />
      </div>
    );
  });
};

export default CommentList;
