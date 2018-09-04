import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import { requestPosts } from './forumReducer';
// import forum from './forumReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  // forum,
  requestPosts,
});

export default rootReducer;
