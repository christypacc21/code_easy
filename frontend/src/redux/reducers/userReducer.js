import {
  LOGIN,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  AUTHENTICATED,
  GET_MY_PROFILE
} from './constants';

const initialState = {
  profile: null,
  instructor: false,
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        profile: action.payload,
        authenticated: true
      };
    case LOGOUT:
      return {
        profile: null,
        instructor: false,
        authenticated: false
      };
    case INSTRUCTOR_SIGNUP:
      return {
        ...state,
        instructor: true
      };
    // case AUTHENTICATED:
    //   return {
    //     ...state,
    //     authenticated: true
    //   };
    case GET_MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
        authenticated: true
      };
    default:
      return state;
  }
};
