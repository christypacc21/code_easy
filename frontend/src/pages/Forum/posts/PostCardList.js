// class component -edux
import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
import { requestPosts } from '../../../redux/actions/forumActions';
// import JSONData from './JSONData';

function mapStateToProps(state) {
  return {
    // postdata: state.postData
    postData: state.requestPosts.posts,
    isPending: state.requestPosts.isPendsing,
    error: state.requestPosts.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestPosts: () => dispatch(requestPosts())
  };
}

class PostCardList extends Component {
  // renderPostList() {
  //   const postData = JSON.stringify(JSONData);
  //   console.log(postData);
  //   return postData.map((data, i) => {
  componentDidMount() {
    this.props.onRequestPosts();
  }
  renderPostList() {
    return this.props.postData.map((data, i) => {
      return (
        <div className="card col-sm-4">
          <PostCard
            key={i}
            postid={data.posts[i].id}
            propicPath={data.posts[i].profilePic}
            username={data.posts[i].display_name}
            dateTime={data.posts[i].created_at}
            postTitle={data.posts[i].title}
            postContent={data.posts[i].content}
            postImagePath={data.posts[i].image_path}
            count={data.count[i].count}
          />
        </div>
      );
    });
  }

  render() {
    const { isPending } = this.props;
    return !isPending ? (
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
