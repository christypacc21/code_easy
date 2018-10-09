//class component
import React, { Component } from 'react';
import PostDetailsCard from './PostDetailsCard';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { requestPostDetails } from '../../../redux/actions/forumActions';
import ForumTab from './ForumTab';

class PostDetails extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.onRequestPostDetails(id);
  }

  render() {
    const postDetailsData = this.props.postDetails;
    const dateTime = moment(postDetailsData.created_at).format('lll');
    return (
      <div>
        <ForumTab />
        <div
          className="jumbotron postDetails col-sm-12"
          style={{ margin: 0, background: '#D3D3D3' }}
        >
          <div>
            <Link className="btn btn-primary btn-lg" to="/posts">
              Back to forum(posts)
            </Link>
            <div style={{ marginTop: '30px' }} />
          </div>
          <div>
            <PostDetailsCard
              postId={postDetailsData.id}
              propicPath={`${process.env.REACT_APP_API_SERVER}/${
                postDetailsData.profilePic
              }`}
              username={postDetailsData.display_name}
              dateTime={dateTime}
              postTitle={postDetailsData.title}
              postContent={postDetailsData.content}
              postImagePath={`${process.env.REACT_APP_API_SERVER}/${
                postDetailsData.image_path
              }`}
              role={postDetailsData.role}
              count={this.props.comments.length}
            />
          </div>
        </div>

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <CommentForm
            paramsId={this.props.match.params.id}
            onRequestPostDetails={this.props.onRequestPostDetails}
          />
          <CommentList comments={this.props.comments} />
          <br />
          <Link className="btn btn-primary btn-lg" to="/posts">
            Back to forum(posts)
          </Link>
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
)(PostDetails);
