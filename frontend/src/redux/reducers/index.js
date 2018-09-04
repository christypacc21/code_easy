import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import { requestPosts } from './forumReducer';
// import forum from './forumReducer';
import questions from './questionReducer';
import profile from './InstructorProfileReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  profile,
  // forum,
  requestPosts
});

export default rootReducer;
