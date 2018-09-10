import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionReducer';
import { requestPosts } from './forumReducer';
import { requestPostDetails } from './forumReducer';
import { requestMyPosts } from './forumReducer';
import { getHistory } from './historyReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  requestPosts,
  requestPostDetails,
  requestMyPosts,
  getHistory
});

export default rootReducer;
