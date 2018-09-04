// func component wif redux
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { requestPostDetails } from '../../../redux/actions/forumActions';

const PostDetailsCard = ({
  // key={ i },
  postId,
  propicPath,
  username,
  dateTime,
  postTitle,
  postContent,
  postImagePath
  //count
}) => {
  return (
    <div>
      <div className="card-body">
        <p className="card-text">
          PostID:
          {postId}
        </p>
        <img alt="User propic" src={propicPath} />
        <p className="card-text">{username}</p>
        <p className="card-text">{dateTime}</p>
        <h5 className="card-title">{postTitle}</h5>
        <p className="card-text">{postContent}</p>
        {
          (propicPath = null ? (
            <p>This post has no image</p>
          ) : (
            <img alt="(Failed to show Post file )" src={postImagePath} />
          ))
        }
        {/* <p>(No. of comments): {count}</p> */}
        <br />
      </div>
    </div>
  );
};

export default PostDetailsCard;

//   render() {
//     return this.props.postDetails.map(details => {
//       return (
//         <div>
//           <div className="card col-sm-12">
//             <p>
//               postId:
//               {details.id}
//             </p>
//             <img>
//               propicPath=
//               {details.profilePic}
//             </img>
//             <p>
//               username=
//               {details.display_name}
//             </p>
//             <p>
//               dateTime=
//               {details.created_at}
//             </p>
//             <p>
//               postContent=
//               {details.content}
//             </p>
//             <p>
//               postImagePath=
//               {details.image_path}
//             </p>
//           </div>
//           {/* <div className="card col-sm-12">
//             <p>user propic</p>
//             <p>username</p>
//             <p>post Title</p>
//             <p>post Image(/file) (if any)</p>
//             <p>post DateTime</p>
//             <p>post Content (Full)</p>
//             <p>(no. of comments)</p>
//           </div> */}
//         </div>
//       );
//     });
//   }
// }

// function mapStateToProps(state) {
//   return {
//     isPending: state.requestPostDetails.isPending,
//     postDetails: state.requestPostDetails.data.postDetails,
//     error: state.requestPostDetails.error
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onRequestPostDetails: id => dispatch(requestPostDetails(id))
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostDetailsCard);
