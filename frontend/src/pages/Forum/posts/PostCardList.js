// class component -edux
import React, { Component } from 'react';
import PostCard from './PostCard';
import { connect } from 'react-redux';
// import JSONData from './JSONData';

class PostCardList extends Component {
  // renderPostList() {
  // componentDidMount???
  //   const postData = JSON.stringify(JSONData);
  //   console.log(postData);
  //   return postData.map((data, i) => {
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
    return (
      <div className="PostCardList">
        <div className="row">{this.renderPostList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postdata: state.postData
  };
}

export default connect(mapStateToProps)(PostCardList);

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
