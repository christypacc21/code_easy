import { GET_ALL_INSTRUCTOR_PROFILE } from './constants';

const initialState = {
  all: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INSTRUCTOR_PROFILE:
      return {
        ...state,
        all: action.payload
      };

    default:
      return state;
  }
};
