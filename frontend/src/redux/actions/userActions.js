import axios from 'axios';
// import { SERVER_URL } from '../config';

import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  INSTRUCTOR_SIGNUP_FAIL,
  AUTHENTICATED
} from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function localSignup(displayName, email, password, role) {
  return async dispatch => {
    const response = await axios.post(SERVER_URL + '/api/signup', {
      displayName,
      email,
      password,
      role
    });

    // console.log('response: ', response);
    if (response.data) {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: AUTHENTICATED
      });
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
    const response = await axios.post(SERVER_URL + '/api/login', {
      email,
      password
    });

    console.log('response: ', response);

    if (response.data) {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: AUTHENTICATED
      });
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

export function loginByFacebook(access_token, role) {
  return async dispatch => {
    const response = await axios.post(SERVER_URL + '/api/login/facebook', {
      access_token,
      role
    });

    console.log('response: ', response);

    if (response.data) {
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: AUTHENTICATED
      });
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

export function logout() {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT
    });
  };
}

export function uploadQuestion(content, filePath, skills) {
  return async (dispatch, getState) => {
    const state = getState();
    console.log('state: ', state);
    try {
      const data = new FormData();
      data.append('inputFile', filePath[0], 'questionIMG');
      data.append('content', content);
      const instructorSkills = skills.map(skill => skill.label);
      data.append('skills', JSON.stringify(instructorSkills));
      const token = localStorage.getItem('token');

      const response = await axios({
        method: 'post',
        url: SERVER_URL + '/api/question/create',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        },
        data
      });

      console.log('question res: ', response);
    } catch (err) {
      alert('Not enough credit');
    }
  };
}

export function updateInstructorProfile(
  introduction,
  education,
  yearCodeExp,
  filePath,
  skills
) {
  return async dispatch => {
    const data = new FormData();
    data.append('inputFile', filePath[0], 'instructorCert');
    data.append('introduction', introduction);
    data.append('education', education);
    data.append('yearCodeExp', yearCodeExp);
    const instructorSkills = skills.map(skill => skill.label);
    // JSON.stringify(instructorSkills);
    // skills.map((skill, i) => {
    //   data.append('skills', skill.label);
    //   return true;
    // });
    data.append('skills', JSON.stringify(instructorSkills));

    const token = localStorage.getItem('token');

    const response = await axios({
      method: 'post',
      url: SERVER_URL + '/api/instructor/signup',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      },
      data
    });

    console.log('response: ', response);

    if (response.status === 200) {
      dispatch({
        type: INSTRUCTOR_SIGNUP,
        payload: {
          introduction,
          education,
          yearCodeExp,
          filePath,
          skills: skills.map(skill => skill.label)
        }
      });
    } else {
      dispatch({
        type: INSTRUCTOR_SIGNUP_FAIL
      });
    }
  };
}
