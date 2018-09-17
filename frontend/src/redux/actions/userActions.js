import axios from 'axios';

import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  INSTRUCTOR_SIGNUP_FAIL,
  GET_MY_PROFILE,
  GET_PURCHASE_RECORD
} from '../reducers/constants';
import { sendChatMessage } from './chatActions';

const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function localSignup(displayName, email, password, role) {
  return async dispatch => {
    try {
      const response = await axios.post(SERVER_URL + '/api/auth/signup', {
        displayName,
        email,
        password,
        role
      });

      // console.log('response: ', response);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: LOGIN,
          payload: response.data
        });
      } else {
        console.log('localSignup - LOGIN_FAIL - response.data', response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: response.data.message
        });
      }
    } catch (err) {
      console.log('localSignup - LOGIN_FAIL - err', err.response);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      });
    }
  };
}

export function loginByEmail(email, password, history) {
  return async dispatch => {
    try {
      const response = await axios.post(SERVER_URL + '/api/auth/login', {
        email,
        password
      });
      if (response.data.success) {
        console.log('local login res: ', response.data);
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: LOGIN,
          payload: response.data
        });
        if (response.data.role === 'student') {
          history.push('/my-questions/ongoing');
        } else {
          history.push('/TakeQuestions');
        }
      } else {
        console.log('local login err: ', response.data);
        dispatch({
          type: LOGIN_FAIL,
          payload: response.data.message
        });
      }
    } catch (err) {
      console.log('localLogin - LOGIN_FAIL - err', err.response);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      });
    }
  };
}

export function loginByFacebook(access_token, role, history) {
  return async dispatch => {
    try {
      const response = await axios.post(
        SERVER_URL + '/api/auth/login/facebook',
        {
          access_token,
          role
        }
      );

      if (response.data.success) {
        console.log('facebook login res: ', response.data);
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: LOGIN,
          payload: response.data
        });
        console.log('facebook login history: ', history);

        if (history) {
          if (response.data.role === 'student') {
            history.push('/my-questions/ongoing');
          } else {
            history.push('/TakeQuestions');
          }
        }
      } else {
        dispatch({
          type: LOGIN_FAIL,
          payload: response.data.message
        });
      }
    } catch (err) {
      console.log('facebookLogin - LOGIN_FAIL - err', err.response);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      });
    }
  };
}

export function logout(history) {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({
      type: LOGOUT
    });
    if (history) {
      history.push('/');
    }
  };
}

export function uploadQuestion(content, filePath, skills, history) {
  return async dispatch => {
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
      if (response.data.success) {
        console.log(
          'response.data.questionInfo - after create question',
          response.data.questionInfo
        );
        dispatch(
          sendChatMessage(
            response.data.questionInfo.content,
            response.data.questionInfo.studentId,
            'Question',
            'student',
            response.data.questionInfo.chatId
          )
        );
        history.push('/chatroom/' + response.data.questionInfo.chatId);
      }
    } catch (err) {
      // need to handle different errors from backend

      // alert('Error: Not enough credit');
      alert('Error: Please contact us!');
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
      url: SERVER_URL + '/api/user/instructor/signUp',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      },
      data
    });

    console.log('response: ', response);

    if (response.data.success) {
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
        type: INSTRUCTOR_SIGNUP_FAIL,
        payload: response.data
      });
    }
  };
}

export function getMyProfile() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios({
          method: 'get',
          url: SERVER_URL + '/api/user/profile',
          headers: {
            Authorization: 'Bearer ' + token
          }
        });

        if (response.data.success) {
          console.log('response.data: ', response.data);
          dispatch({
            type: GET_MY_PROFILE,
            payload: response.data.profile
          });
        }
      } catch (err) {
        console.log('getMyProfile error: ', err);
        alert('Failed to get user profile ' + err);
      }
    }
  };
}

export function getPurchaseRecord() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios({
          method: 'get',
          url: SERVER_URL + '/api/payment/student',
          headers: {
            Authorization: 'Bearer ' + token
          }
        });

        if (response.data.success) {
          console.log('response.data: ', response.data);
          dispatch({
            type: GET_PURCHASE_RECORD,
            payload: response.data.purchaseRecord
          });
        }
      } catch (err) {
        console.log('getPurchaseRecord error: ', err);
        alert('Failed to get purchase record ' + err);
      }
    }
  };
}
