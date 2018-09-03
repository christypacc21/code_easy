import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import * as forum from './forumReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions,
  forum
});

export default rootReducer;
