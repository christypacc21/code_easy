import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionReducer';

const rootReducer = combineReducers({
  user,
  chat,
  questions
});

export default rootReducer;
