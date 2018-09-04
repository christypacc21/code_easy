//class component
import React, { Component } from 'react';
import PostDetailsCard from './PostDetailsCard';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestPostDetails } from '../../../redux/actions/forumActions';

class PostDetails extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.onRequestPostDetails(id);
  }
  renderPost() {
    return this.props.postDetails.map((details, i) => {
      return (
        <PostDetailsCard
          key={i}
          postId={details.id}
          propicPath={details.profilePic}
          username={details.display_name}
          dateTime={details.created_atå}
          postTitle={details.title}
          postContent={details.content}
          postImagePath={details.image_path}
          // count={data.count[i].count}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <a className="btn btn-primary " href="/postsPage">
          Back to forum(posts)
        </a>

        <div
          className="jumbotron postDetails card col-sm-12"
          style={{ margin: 0, background: '#D3D3D3' }}
        >
          <p>GET and Show individual post details card here</p>
          <div> {this.renderPost()}</div>
        </div>

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <p>GET and show CommentList here:</p>
          <CommentList comments={this.props.comments} />
          <CommentForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPending: state.requestPostDetails.isPending,
    postDetails: state.requestPostDetails.data.postDetails,
    comments: state.requestPostDetails.data.comments,
    error: state.requestPostDetails.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestPostDetails: id => dispatch(requestPostDetails(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsCard);

// renderCommentList() {
//   return this.props.comments.map((comment, i) => {
//     return (
//       <div className="card col-sm-4">
//         <CommentList
//           key={i}
//           propicPath={comment[i].profilePic}
//           username={comment[i].display_name}
//           dateTime={comment[i].created_at}
//           commentContent={comment[i].content}
//           commentImagePath={comment[i].image_path}
//         />
//       </div>
//     );
//   });
// }
