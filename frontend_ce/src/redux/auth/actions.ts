import axios from "axios";
import { Dispatch } from "redux";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LOGIN_SUCCESS = typeof LOGIN_SUCCESS;

export interface ILoginSuccessAction {
  type: LOGIN_SUCCESS;
}

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export type LOGIN_FAILURE = typeof LOGIN_FAILURE;

export interface ILoginFailureAction {
  message: string;
  type: LOGIN_FAILURE;
}

export const LOGOUT = "LOGOUT";
export type LOGOUT = typeof LOGOUT;

export interface ILogOutAction {
  type: LOGOUT;
}

export type LoginActions =
  | ILoginSuccessAction
  | ILoginFailureAction
  | ILogOutAction;

function loginSuccess(): ILoginSuccessAction {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginFailure(message: string): ILoginFailureAction {
  return {
    message,
    type: LOGIN_FAILURE
  };
}

function logOutAction(): ILogOutAction {
  return {
    type: LOGOUT
  };
}

export function loginUser(username: string, password: string): any {
  return (dispatch: Dispatch<LoginActions>) => {
    return axios
      .post<{ token: string; message?: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login`,
        {
          password,
          username
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ""));
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem("token", response.data.token);
          // Dispatch the success action
          dispatch(loginSuccess());
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function loginFacebook(accessToken: string): any {
  return (dispatch: Dispatch<LoginActions>) => {
    return axios
      .post<{ token: string; message?: string }>(
        `${process.env.REACT_APP_API_SERVER}/api/login/facebook`,
        {
          access_token: accessToken
        }
      )
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailure("Unknown Error"));
        } else if (!response.data.token) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginFailure(response.data.message || ""));
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem("token", response.data.token);
          // Dispatch the success action
          dispatch(loginSuccess());
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    FB: {
      logout: (callback: () => void) => void;
    };
  }
}

export function logOut() {
  return (dispatch: Dispatch<LoginActions>) => {
    window.FB.logout(() => {
      localStorage.removeItem("token");
      // Dispatch the success action
      dispatch(logOutAction());
    });
  };
}
