import { LOGIN, LOGOUT, INSTRUCTOR_SIGNUP } from './constants';

const initialState = {
  user: null,
  instructor: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        instructor: null
      };
    case INSTRUCTOR_SIGNUP:
      return {
        ...state,
        instructor: true
      };
    default:
      return state;
  }
};
