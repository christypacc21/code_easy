import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionReducer';
// import forum from './forumReducer';
import { requestPosts } from './forumReducer';
import { requestPostDetails } from './forumReducer';
import { getHistory } from './historyReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  // forum,
  requestPosts,
  requestPostDetails,
  getHistory
});

export default rootReducer;
