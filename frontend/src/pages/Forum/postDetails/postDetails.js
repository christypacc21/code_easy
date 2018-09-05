//class component
import React, { Component } from 'react';
import PostDetailsCard from './PostDetailsCard';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestPostDetails } from '../../../redux/actions/forumActions';

class PostDetails extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    console.log('haha' + id);
    this.props.onRequestPostDetails(id);
  }

  render() {
    const postDetailsData = this.props.postDetails;
    return (
      <div>
        <Link className="btn btn-primary" to="/posts">
          Back to forum(posts)
        </Link>

        <div
          className="jumbotron postDetails card col-sm-12"
          style={{ margin: 0, background: '#D3D3D3' }}
        >
          <p>GET and Show individual post details card here</p>
          <div>
            <PostDetailsCard
              postId={postDetailsData.id}
              propicPath={`${process.env.REACT_APP_API_SERVER}/${
                postDetailsData.profilePic
              }`}
              // /images/forumPosts/8_1536084354220_postIMG.jpg
              username={postDetailsData.display_name}
              dateTime={postDetailsData.created_at}
              postTitle={postDetailsData.title}
              postContent={postDetailsData.content}
              postImagePath={`${process.env.REACT_APP_API_SERVER}/${
                postDetailsData.image_path
              }`}
              role={postDetailsData.role}
              // count={data.count[i].count}
            />
          </div>
        </div>

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <CommentForm paramsId={this.props.match.params.id} />
          <p>GET and show CommentList here:</p>
          <CommentList comments={this.props.comments} />
          {/* <CommentForm /> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.requestPostDetails.data.postDetails);
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
)(PostDetails);
