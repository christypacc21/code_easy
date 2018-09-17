import React from 'react';
// import codePhoto from '../../img/code.jpg';
import { connect } from 'react-redux';
import { requestPosts } from '../../redux/actions/forumActions';
import { Link } from 'react-router-dom';
import CommuPostCard from './CommuPostCard';
import moment from 'moment';

class Commun extends React.Component {
  componentDidMount() {
    this.props.onRequestPosts();
    console.log('ComponentDidMountdata :' + this.props.postData);
  }

  renderPostList() {
    if (this.props.isPending) {
      console.log('renderpostlist is pending');
      return <div style={{ margin: 10 }}>{/* Loading Posts... */}</div>;
    } else {
      console.log('renderPostList got data :' + this.props.postData);

      return this.props.postData
        .reverse()
        .slice(0, 6)
        .map((posts, i) => {
          const {
            id,
            profilePic,
            display_name,
            created_at,
            title,
            content,
            image_path
          } = posts.post;
          const count = posts.count;
          // console.log('ppppp');
          // console.log(count);
          return (
            <div key={i}>
              <CommuPostCard
                postId={id}
                propicPath={profilePic}
                username={display_name}
                dateTime={moment(created_at).format('lll')}
                dateTimeFromNow={moment(created_at).fromNow()}
                postTitle={title}
                postContent={content}
                postImagePath={image_path}
                count={count}
                auth={this.props.user.authenticated}
              />
            </div>
          );
        });
    }
  }

  render() {
    return (
      <div className="LandingMomDiv">
        <div>
          <div className="row postHeadWord">
            <p className="display-4 wording ">
              <strong>Latest Posts</strong>
            </p>
          </div>
          <br />

          {this.renderPostList()}
          <br />
          {this.props.user.authenticated === false ? (
            <Link className="btn btn-outline-info buttonAc" to={`/posts`}>
              Go To Coding Community To See More Posts
              {/* (Signup or Signin) */}
            </Link>
          ) : (
            <Link className="btn btn-outline-info buttonAc" to={`/posts`}>
              More Posts
              {/* Go To Coding Community To See More Posts */}
            </Link>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
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
)(Commun);
