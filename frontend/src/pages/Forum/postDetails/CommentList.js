import React from 'react';
import CommentCard from './CommentCard';
import moment from 'moment';

const CommentList = ({ comments }) => {
  return comments.reverse().map((comment, i) => {
    return (
      <div className="card col-sm-12" key={i}>
        <CommentCard
          // commentId={comment.id}
          commentNum={comments.length - i}
          propicPath={comment.profilePic}
          role={comment.role}
          username={comment.display_name}
          commentTime={moment(comment.commentTime).format('lll')}
          commentTimeFromNow={moment(comment.commentTime).fromNow()}
          commentContent={comment.content}
          commentImagePath={comment.image_path}
        />
      </div>
    );
  });
};

export default CommentList;
