import {
  // SOCKET,
  // SOCKET_EMIT,
  // SEND_MESSAGE,
  NEW_MESSAGE,
  GET_ALL_MESSAGES
} from './constants';

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export function messagesByChatroom(state, chatId) {
  console.log('chatId: ', chatId);
  return state.chat.messages.filter(message => message.chatId === chatId);
}
