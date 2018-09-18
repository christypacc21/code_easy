import {
  NEW_MESSAGE,
  GET_ALL_MESSAGES,
  GET_INSTRUCTOR_INFO,
  GET_STUDENT_INFO,
  GET_CHATROOMSTATUS_SUCCESS,
  UPDATE_END_SESSION
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
    case GET_STUDENT_INFO:
      return {
        ...state,
        studentInfo: action.payload
      };
    case GET_CHATROOMSTATUS_SUCCESS:
      return {
        ...state,
        chatroomStatus: action.payload
      };
    case UPDATE_END_SESSION:
      return {
        ...state,
        chatroomStatus: action.payload
      };
    default:
      return state;
  }
};
