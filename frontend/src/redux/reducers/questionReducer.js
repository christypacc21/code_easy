import { GET_ALL_QUESTIONS } from './constants';

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        all: action.payload
      };

    default:
      return state;
  }
};
