import {
  SOCKET,
  SOCKET_EMIT,
  SEND_MESSAGE,
  GET_ALL_MESSAGES,
  START_SESSION,
  END_SESSION,
  GET_CHATROOMSTATUS_SUCCESS
} from '../reducers/constants';
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function sendChatMessage(message, userId, displayName, role, chatId) {
  console.log(
    'aaaa aaaaaaaa chatAction - sendChatMessage',
    message,
    userId,
    displayName,
    role,
    chatId
  );
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

export function createRating(chatId, rating, feedback) {
  console.log('chatId, rating, feedback', chatId, rating, feedback);
  return async dispatch => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios({
        method: 'post',
        url: SERVER_URL + '/api/question/rating',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        data: { chatId, rating, feedback }
      });
      console.log('createRating res: ', response);
    } catch (err) {
      console.log('createRating err: ', err);
    }
  };
}

export function getChatroomStatus(chatId) {
  console.log('chatidddddddd' + chatId); //works well
  return async dispatch => {
    // dispatch({ type: GET_CHATROOMSTATUS_PENDING });
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'get',
      url: SERVER_URL + `/api/history/chatroomStatus/${chatId}`,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
      // data: { chatId }
    });
    if (response.status === 200) {
      console.log(response);
      dispatch({ type: GET_CHATROOMSTATUS_SUCCESS, payload: response.data });
    } else {
      console.log('getchatrooms err');
    }
  };
}

// export function getChatroomStatus(chatId) {
// 	console.log('chatidddddddd' + chatId); //works well
// 	return async dispatch => {
// 		// dispatch({ type: GET_CHATROOMSTATUS_PENDING });
// 		try {
// 			const token = localStorage.getItem('token');
// 			const response = await axios({
// 				method: 'get',
// 				url: SERVER_URL + '/api/history/chatroomStatus',
// 				headers: {
// 					Authorization: 'Bearer ' + token,
// 					'Content-Type': 'application/json'
// 				},
// 				data: { chatId }
// 			});
// 			console.log('qqqqqqqqqq' + response.data);
// 			dispatch({
// 				type: GET_CHATROOMSTATUS_SUCCESS,
// 				payload: response.data
// 			});
// 		} catch (err) {
// 			console.log('getChatroomStatus err' + err);
// 		}
// 	};
// }
