import axios from 'axios';
// import { SERVER_URL } from '../config';

import { LOGIN, LOGIN_FAIL, LOGOUT } from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export function localSignup(displayName, email, password, role) {
  return async dispatch => {
    const response = await axios.post(SERVER_URL + '/api/signup', {
      displayName,
      email,
      password,
      role
    });

    console.log('res', response);
    if (response.data) {
      dispatch({
        type: LOGIN,
        payload: response.data
      });
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
}

export function loginByEmail(email, password) {
  return async dispatch => {
    const { data } = await axios.post(SERVER_URL + '/api/login', {
      email,
      password
    });

    console.log('response: ', data);

    if (data) {
      dispatch({
        type: LOGIN,
        payload: data
      });
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
}

export function loginByFacebook(access_token) {
  return async dispatch => {
    const { data } = await axios.post(SERVER_URL + '/api/login/facebook', {
      access_token
    });

    console.log('response: ', data);

    if (data) {
      dispatch({
        type: LOGIN,
        payload: data
      });
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT
    });
  };
}
