// class component -redux
import React, { Component } from 'react';
import MyPostCard from './myPostCard';
import { connect } from 'react-redux';
import { requestMyPosts } from '../../../redux/actions/forumActions';

class MyPostList extends Component {
  componentWillMount() {
    this.props.onRequestMyPosts();
    console.log('ComponentWillMountdata :' + this.props.postData);
  }

  renderMyPostList() {
    if (this.props.isPending) {
      console.log('rendermypostlist is pending');
      return (
        <div style={{ margin: 10 }}>
          <p>Loading...</p>
        </div>
      );
    } else {
      console.log('renderPostList got data :');
      console.log(this.props.postData);
      return this.props.postData.map((post, i) => {
        return (
          <div className="card col-sm-4" key={i}>
            <MyPostCard
              // key={i}
              postId={post.id}
              dateTime={post.created_at}
              postTitle={post.title}
              postContent={post.content}
              postImagePath={post.image_path}
              count={post.count}
            />
          </div>
        );
      });
    }
  }

  render() {
    return this.props.isPending ? (
      <div>
        <h1>Loading</h1>
      </div>
    ) : (
      <div>
        <div className="PostCardList" />
        <div className="row">{this.renderMyPostList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('started MapStateToProps->');
  console.log(state.requestMyPosts);
  console.log('MapStateToProps after return->');
  console.log(state.requestMyPosts);
  return {
    isPending: state.requestMyPosts.isPending,
    postData: state.requestMyPosts.data.myposts,
    error: state.requestMyPosts.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestMyPosts: () => dispatch(requestMyPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPostList);