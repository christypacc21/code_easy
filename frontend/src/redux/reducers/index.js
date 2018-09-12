import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionReducer';
import { requestPosts } from './forumReducer';
import { requestPostDetails } from './forumReducer';
import { requestMyPosts } from './forumReducer';
import { getHistory } from './historyReducer';
import { requestMyComments } from './forumReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  requestPosts,
  requestPostDetails,
  requestMyPosts,
  getHistory,
  requestMyComments
});

export default rootReducer;
