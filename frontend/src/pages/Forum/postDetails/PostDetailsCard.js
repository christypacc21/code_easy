// func component wif redux
import React from 'react';
// import { connect } from 'react-redux';
// import { requestPostDetails } from '../../../redux/actions/forumActions';

const PostDetailsCard = ({
  postId,
  propicPath,
  username,
  dateTime,
  postTitle,
  postContent,
  postImagePath,
  role
  //count
}) => {
  // console.log('hahawewaerawer' + propicPath);
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          PostID:
          {' ' + postId}
        </p>
        {
          (propicPath = `${process.env.REACT_APP_API_SERVER}/${propicPath}` ? (
            <p>[[[This user has no pro pic]]]</p>
          ) : (
            <div>
              <img
                className="card"
                style={{ maxHeight: '10em' }}
                alt="(Failed to show Post file )"
                src={propicPath}
              />
            </div>
          ))
        }
        <p className="card-text">Created by :{username}</p>
        <p className="card-text">Role: {role}</p>
        <p className="card-text">Created at: {dateTime}</p>
        <h5 className="card-title">Post Title: {postTitle}</h5>
        <p className="card-text">Post Content: {postContent}</p>
        {!postImagePath ? (
          <p>[[[This post has no image]]]</p>
        ) : (
          <div>
            <img
              className="card"
              alt="(Failed to show Post file )"
              src={postImagePath}
            />
          </div>
        )}
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
