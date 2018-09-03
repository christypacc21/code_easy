// class component
import React, { Component } from 'react';
import PostCardList from './PostCardList';
import SearchBar from './SearchBar';
// import { setSearchField } from '.././redux/actions/forumActions';

class PostsPage extends Component {
  render() {
    return (
      <div>
        <div>
          <a className="btn btn-primary" href="/posts/new">
            Create Post!
          </a>
        </div>
        {/* <SearchBar onSearchTermChange={postSearch} /> */}
        <SearchBar />
        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          {/* <div className="container"> */}
          <div>GET and show Posts Lists (list of posts):</div>
          <PostCardList />
          {/* </div> */}
          <button
            className="btn btn-danger"
            style={{ marginLeft: 800, marginTop: 50 }}
          >
            Load more
          </button>
        </div>
      </div>
    );
  }
}

export default PostsPage;

// function mapStateToProps(state) {
//   return {
//     searchField: state.searchPosts.searchField
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onSearchChange: e => dispatch(setSearchField(e.target.value))
//   };
// }
