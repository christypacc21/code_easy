import {
  SOCKET,
  SOCKET_EMIT,
  SEND_MESSAGE,
  GET_ALL_MESSAGES,
  START_SESSION,
  END_SESSION
} from '../reducers/constants';

export function sendChatMessage(message, userId, displayName, chatId) {
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: SEND_MESSAGE,
        message,
        userId,
        displayName,
        chatId
      }
    });
  };
}

export function getAllMessages(chatId, userId, role) {
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: GET_ALL_MESSAGES,
        chatId,
        userId,
        role
      }
    });
  };
}

export function userEnterChatroom(chatId, userId, role) {
  console.log('userEnterChatroom - userId', userId, 'chatId', chatId);
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: START_SESSION,
        chatId,
        userId,
        role
      }
    });
  };
}
