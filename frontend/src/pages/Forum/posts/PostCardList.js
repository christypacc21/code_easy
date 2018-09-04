// class component -edux
import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { requestPosts } from '../../../redux/actions/forumActions';
// import JSONData from './JSONData';

class PostCardList extends Component {
  // renderPostList() {
  //   const postData = JSON.stringify(JSONData);
  //   console.log(postData);
  //   return postData.map((data, i) => {
  componentDidMount() {
    this.props.onRequestPosts();
    console.log('ComponentDidMountdata :' + this.props.postData);
  }

  renderPostList() {
    if (this.props.isPending) {
      console.log('renderpostlist is pending');
    } else {
      console.log('renderPostList got data :' + this.props.postData);
      return this.props.postData.posts.map((post, i) => {
        console.log('about to render post list' + post);
        return (
          <div className="card col-sm-4">
            <PostCard
              key={i}
              postId={i + 1}
              propicPath={post.profilePic}
              username={post.display_name}
              dateTime={post.created_at}
              postTitle={post.title}
              postContent={post.content}
              postImagePath={post.image_path}
              // count={data.count[i].count}
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
      <div className="PostCardList">
        <div className="row">{this.renderPostList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('state:' + state);
  console.log('started MapStateToProps->' + state.requestPosts.data);
  console.log('MapStateToProps after return->' + state.requestPosts.data);
  return {
    // postdata: state.postData
    isPending: state.requestPosts.isPending,
    postData: state.requestPosts.data,
    error: state.requestPosts.error
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

//   render() {
//     return (
//       <div className="PostCardList">
//         <div className="row">
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//           <div className="card col-sm-4">
//             <PostCard />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default PostCardList;
