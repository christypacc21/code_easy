// class component -redux
import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import moment from 'moment';
import { requestPosts } from '../../../redux/actions/forumActions';
import { Link } from 'react-router-dom';

class PostCardList extends Component {
  componentDidMount() {
    this.props.onRequestPosts();
    console.log('ComponentDidMountdata :' + this.props.postData);
  }

  renderPostList() {
    if (this.props.isPending) {
      console.log('renderpostlist is pending');
      return (
        <div style={{ margin: 10 }}>
          <Link className="btn btn-secondary btn-lg btn-block" to="/login">
            Loading Posts...
          </Link>
        </div>
      );
    } else {
      console.log('renderPostList got data :' + this.props.postData);

      return this.props.postData.map((ele, i) => {
        let post = ele.post;
        let count = ele.count;
        return (
          <div className="card col-lg-4 col-md-6 col-sm-12" key={i}>
            <PostCard
              postId={post.id}
              propicPath={post.profilePic}
              username={post.display_name}
              dateTime={moment(post.created_at).format('lll')}
              dateTimeFromNow={moment(post.created_at).fromNow()}
              postTitle={post.title}
              postContent={post.content}
              postImagePath={post.image_path}
              count={count}
              auth={this.props.user.authenticated}
            />
          </div>
        );
      });
    }
  }

  render() {
    return this.props.isPending ? (
      <div>
        <h1>Loading Posts...</h1>
      </div>
    ) : (
      <div>
        <div style={{ margin: 10 }}>
          {this.props.user.authenticated ? (
            <Link
              className="btn btn-secondary btn-lg btn-block"
              to="/posts/new"
            >
              Create Post for Free!
            </Link>
          ) : (
            <Link className="btn btn-secondary btn-lg btn-block" to="/login">
              Login or Signup to Create Post for Free!
            </Link>
          )}
        </div>
        <div className="PostCardList" />
        <div className="row">{this.renderPostList()}</div>
        <br />
        <div style={{ margin: 10 }}>
          {this.props.user.authenticated ? (
            <Link
              className="btn btn-secondary btn-lg btn-block"
              to="/posts/new"
            >
              Create Post for Free!
            </Link>
          ) : (
            <Link className="btn btn-secondary btn-lg btn-block" to="/login">
              Login or Signup to Create Post for Free!
            </Link>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('started MapStateToProps->' + state.requestPosts.data);
  console.log('MapStateToProps after return->' + state.requestPosts.data);
  return {
    isPending: state.requestPosts.isPending,
    postData: state.requestPosts.data.posts,
    error: state.requestPosts.error,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestPosts: () => dispatch(requestPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCardList);
