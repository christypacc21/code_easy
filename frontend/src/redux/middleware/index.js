import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import socket from './socket';

let middleware = [reduxThunk];

let isDebuggingInChrome = false;

if (typeof window !== 'undefined') {
  isDebuggingInChrome =
    process.env.NODE_ENV === 'development' &&
    window &&
    !!window.navigator.userAgent;
}

// let isDebuggingInChrome = true;

// if(NODE_ENV === 'DEV') {
if (process.env.NODE_ENV === 'development') {
  let logger = createLogger({
    predicate: (getState, action) => isDebuggingInChrome,
    collapsed: true,
    duration: true
  });

  middleware.push(logger);
}

middleware.push(socket);

export default middleware;
