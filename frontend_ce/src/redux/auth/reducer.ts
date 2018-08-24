import { LOGIN_SUCCESS, LoginActions, LOGOUT } from "./actions";

export interface IAuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

export function authReducer(
  state: IAuthState = initialState,
  action: LoginActions
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
