import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ comments }) => {
  return comments.map((comment, i) => {
    return (
      <div className="card col-sm-4">
        <CommentCard
          key={i}
          propicPath={comment[i].profilePic}
          username={comment[i].display_name}
          dateTime={comment[i].created_at}
          commentContent={comment[i].content}
          commentImagePath={comment[i].image_path}
        />
      </div>
    );
  });
};

export default CommentList;

// //------
// // class component without redux
// import React from 'react';
// import CommentCard from './CommentCard';

// const CommentList = ({
//   key,
//   propicPath,
//   username,
//   dateTime,
//   commentContent,
//   commentImagePath
// }) => {
//   return (
//     <div className="CommentList">
//       <div className="row">
//         <CommentCard />
//       </div>
//     </div>
//   );
// };

// export default CommentList;
