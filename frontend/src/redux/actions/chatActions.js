import {
  SOCKET,
  SOCKET_EMIT,
  SEND_MESSAGE,
  GET_ALL_MESSAGES
} from '../reducers/constants';

export function sendChatMessage(message, userId, display_name, chatId) {
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: SEND_MESSAGE,
        message,
        userId,
        display_name,
        chatId
      }
    });
  };
}

export function getAllMessages() {
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: GET_ALL_MESSAGES
      }
    });
  };
}
