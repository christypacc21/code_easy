// class component
import React, { Component } from 'react';
import PostCardList from './PostCardList';
import SearchBar from './SearchBar';
// import { setSearchField } from '.././redux/actions/forumActions';

class PostsPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div style={{ margin: 10 }}>
          <a className="btn btn-secondary btn-lg btn-block" href="/posts/new">
            Press to Create Post for Free!
          </a>
        </div>
        {/* <SearchBar onSearchTermChange={postSearch} /> */}

        <div className="jumbotron" style={{ margin: 0, background: '#00B0AF' }}>
          {/* <div className="container"> */}
          <div>GET and show Posts Lists (list of posts):</div>
          <PostCardList />
          {/* </div> */}
          <button
            className="btn btn-danger btn-lg btn-block"
            style={{ marginTop: 30 }}
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
