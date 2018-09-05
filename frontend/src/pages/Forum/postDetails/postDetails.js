//class component
import React, { Component } from 'react';
import PostDetailsCard from './PostDetailsCard';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { requestPostDetails } from '../../../redux/actions/forumActions';

class PostDetails extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.onRequestPostDetails(id);
  }

  render() {
    const popo = this.props.postDetails;
    return (
      <div>
        <a className="btn btn-primary " href="/posts">
          Back to forum(posts)
        </a>

        <div
          className="jumbotron postDetails card col-sm-12"
          style={{ margin: 0, background: '#D3D3D3' }}
        >
          <p>GET and Show individual post details card here</p>
          <div>
            <PostDetailsCard
              postId={popo.id}
              propicPath={popo.profilePic}
              username={popo.display_name}
              dateTime={popo.created_at}
              postTitle={popo.title}
              postContent={popo.content}
              postImagePath={`${process.env.REACT_APP_API_SERVER}/${
                popo.image_path
              }`}
              role={popo.role}
              // count={data.count[i].count}
            />
          </div>
        </div>

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          <p>GET and show CommentList here:</p>
          <CommentList comments={this.props.comments} />
          {/* <CommentForm /> */}
          <CommentForm paramsId={this.props.match.params.id} />
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
