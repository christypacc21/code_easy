// class component -redux
import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MyCommentCard from './myCommentCard';
import { requestMyComments } from '../../../redux/actions/forumActions';
import './myComments.css';

class MyCommentList extends Component {
  componentWillMount() {
    this.props.onRequestMyComments();
  }

  renderMyCommentList() {
    if (this.props.commentData.length === 0) {
      return (
        <h5 style={{ marginLeft: '15px' }}>
          You haven't created any comments yet.
        </h5>
      );
    } else {
      return this.props.commentData.reverse().map((comment, i) => {
        const commentTime = moment(comment.commentTime).format('lll');
        const postTime = moment(comment.postTime).format('lll');
        return (
          <div className="card col-lg-4 col-md-6 col-sm-12" key={i}>
            <MyCommentCard
              commentId={comment.commentId}
              postId={comment.postId}
              commentTime={commentTime}
              postTime={postTime}
              postTitle={comment.postTitle}
              commentContent={comment.commentContent}
              commentImagePath={comment.commentImagePath}
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
        <div className="CommentCardList" />
        <div className="row">{this.renderMyCommentList()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isPending: state.requestMyComments.isPending,
    commentData: state.requestMyComments.data.mycomments,
    error: state.requestMyComments.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestMyComments: () => dispatch(requestMyComments())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCommentList);
