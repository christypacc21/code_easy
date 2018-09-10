import {
  SOCKET,
  SOCKET_EMIT,
  SEND_MESSAGE,
  GET_ALL_MESSAGES,
  START_SESSION,
  END_SESSION
} from '../reducers/constants';
// import axios from 'axios';
// const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function sendChatMessage(message, userId, displayName, role, chatId) {
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: SEND_MESSAGE,
        message,
        userId,
        displayName,
        role,
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

export function userStartSession(chatId, userId, role) {
  console.log('userStartSession - userId', userId, 'chatId', chatId);
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

export function userEndSession(chatId, userId, role) {
  console.log('userEndSesssion - userId', userId, 'chatId', chatId);
  return async dispatch => {
    dispatch({
      type: SOCKET,
      socketAction: SOCKET_EMIT,
      payload: {
        actionType: END_SESSION,
        chatId,
        userId,
        role
      }
    });
  };
}

// //--------- rating action --------//
// export function rating(chatroomId, studentId, instructorId, rating) {
//   return async dispatch => {
//     try {
//       const data = new FormData();
//       data.append('rating', rating);
//       const token = localStorage.getItem('token');
//       const response = await axios({
//         method: 'post',
//         url: SERVER_URL + '/api/', //??? shd use wht api route???
//         headers: {
//           Authorization: 'Bearer ' + token,
//           'Content-Type': 'multipart/form-data'
//         },
//         data
//       });
//       console.log('createRating res: ', response);
//     } catch (err) {
//       console.log('createRating err: ', err);
//     }
//   };
// }
