import {
  LOGIN,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  AUTHENTICATED,
  GET_MY_PROFILE,
} from './constants';

const initialState = {
  profile: null,
  instructor: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        profile: action.payload,
      };
    case LOGOUT:
      return {
        authenticated: false,
        profile: null,
        instructor: false,
      };
    case INSTRUCTOR_SIGNUP:
      return {
        ...state,
        instructor: true,
      };
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
