import {
  NEW_MESSAGE,
  GET_ALL_MESSAGES,
  GET_INSTRUCTOR_INFO
} from './constants';

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      console.log('GET_ALL_MESSAGES', action.payload);
      return {
        ...state,
        messages: action.payload
      };
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case GET_INSTRUCTOR_INFO:
      return {
        ...state,
        instructorInfo: action.payload
      };
    default:
      return state;
  }
};
