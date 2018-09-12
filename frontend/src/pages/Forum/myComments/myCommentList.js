// class component -redux
import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import MyCommentCard from './myCommentCard';
import { requestMyComments } from '../../../redux/actions/forumActions';

class MyCommentList extends Component {
  componentWillMount() {
    this.props.onRequestMyComments();
    // console.log('ComponentWillMountdata :' + this.props.commentData);
  }

  renderMyCommentList() {
    if (this.props.isPending) {
      // console.log('rendermycommentlist is pending');
      return (
        <div style={{ margin: 10 }}>
          <p>Loading...</p>
        </div>
      );
    } else {
      // console.log('renderCommentList got data :');
      // console.log(this.props.commentData);
      return this.props.commentData.map((comment, i) => {
        const commentTime = moment(comment.commentTime).format('lll');
        const postTime = moment(comment.postTime).format('lll');
        return (
          <div className="card col-sm-4" key={i}>
            <MyCommentCard
              // key={i}
              commentId={comment.commentId}
              postId={comment.postId}
              commentTime={commentTime}
              postTime={postTime}
              postTitle={comment.postTitle}
              commentContent={comment.commentContent}
              commentImagePath={comment.commentImage_path}
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
  // console.log('started MapStateToProps->');
  // console.log(state.requestMyComments);
  // console.log('MapStateToProps after return->');
  // console.log(state.requestMyComments);
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
