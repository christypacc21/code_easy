// class component
import React, { Component } from 'react';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import { requestPostDetails } from '../../../redux/actions/forumActions';

class CommentList extends Component {
  componentDidMount() {
    this.props.onRequestPostDetails();
  }

  renderCommentList() {
    return this.props.comments.map((comment, i) => {
      return (
        <div className="card col-sm-4">
          <CommentCard
            key={i}
            propicPath={comment[i].profilePic}
            username={comment[i].display_name}
            dateTime={comment[i].created_at}
            commentContent={comment[i].content}
            commentImagePath={comment[i].image_path}
          />
        </div>
      );
    });
  }

  render() {
    return !this.props.isPending ? (
      <div>
        <h1>Loading Comments</h1>
      </div>
    ) : (
      <div className="CommentList">
        <div className="row">{this.renderCommentList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPending: state.requestPostDetails.isPending,
    comments: state.requestPostDetails.data.comments,
    error: state.requestPostDetails.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestPostDetails: () => dispatch(requestPostDetails())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
