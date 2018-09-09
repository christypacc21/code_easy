import {
  GET_HISTORY_PENDING,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILED
} from '../reducers/constants';

//-----reducer - get chat history ----//
const initialStateHistory = {
  isPending: false,
  data: {}
};

export const getHistory = (state = initialStateHistory, action = {}) => {
  switch (action.type) {
    case GET_HISTORY_PENDING:
      return { ...state, isPending: true };
    case GET_HISTORY_SUCCESS:
      return { ...state, data: action.payload, isPending: false };
    case GET_HISTORY_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
