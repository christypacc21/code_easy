import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  INSTRUCTOR_SIGNUP_FAIL,
  GET_MY_PROFILE,
  GET_PURCHASE_RECORD
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
    case LOGIN_FAIL:
      alert('Error: ' + action.payload);
      return {
        ...state,
        authenticated: false
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
    case INSTRUCTOR_SIGNUP_FAIL:
      alert('Error: ' + action.payload);
      return {
        ...state,
        authenticated: false
      };
    case GET_MY_PROFILE:
      return {
        ...state,
        profile: action.payload,
        authenticated: true
      };
    case GET_PURCHASE_RECORD:
      return {
        ...state,
        purchaseRecord: action.payload,
        authenticated: true
      };
    default:
      return state;
  }
};
