import io from 'socket.io-client';
import store from '../store';
import {
  SOCKET,
  SOCKET_ON,
  SOCKET_EMIT
  // SEND_MESSAGE,
} from '../reducers/constants';

const socket = io(process.env.REACT_APP_API_SERVER);

socket.on(SOCKET_ON, payload => {
  if (payload.actionType) {
    store.dispatch({
      type: payload.actionType,
      payload: payload.payload
    });
  }
});

const socketMiddleware = ({ dispatch, getState }) => next => async action => {
  if (action.type !== SOCKET) {
    return next(action);
  }

  if (action.socketAction === SOCKET_EMIT) {
    socket.emit(SOCKET_EMIT, action.payload);
  }

  try {
  } catch (err) {
    console.log('socket error: ', err);
  }
};

export default socketMiddleware;
