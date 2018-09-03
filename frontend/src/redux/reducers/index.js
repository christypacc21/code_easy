import { combineReducers } from 'redux';
import user from './userReducer';
import chat from './chatReducer';
import * as forum from './forumReducer';

const rootReducer = combineReducers({
  user,
  chat,
  forum
});

export default rootReducer;
