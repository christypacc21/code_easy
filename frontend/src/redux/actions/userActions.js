import axios from 'axios';

import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  INSTRUCTOR_SIGNUP,
  INSTRUCTOR_SIGNUP_FAIL,
  AUTHENTICATED,
  GET_MY_PROFILE
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

export function loginByEmail(email, password, history) {
  return async dispatch => {
    const response = await axios.post(SERVER_URL + '/api/login', {
      email,
      password
    });
    if (response.data) {
      console.log('local login res: ', response.data);
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: AUTHENTICATED
      });
      dispatch({
        type: LOGIN,
        payload: response.data
      });
      if (response.data.role === 'student') {
        history.push('/CreateQuestion');
      } else {
        history.push('/TakeQuestions');
      }
      // dispatch(getMyProfile());
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
}

export function loginByFacebook(access_token, role, history) {
  return async dispatch => {
    const response = await axios.post(SERVER_URL + '/api/login/facebook', {
      access_token,
      role
    });

    if (response.data) {
      console.log('facebook login res: ', response.data);
      localStorage.setItem('token', response.data.token);
      dispatch({
        type: AUTHENTICATED
      });
      dispatch({
        type: LOGIN,
        payload: response.data
      });
      if (history) {
        if (response.data.role === 'student') {
          history.push('/CreateQuestion');
        } else {
          history.push('/TakeQuestions');
        }
      }
      // dispatch(getMyProfile());
    } else {
      dispatch({
        type: LOGIN_FAIL
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
        history.push('/chatroom/' + response.data.questionInfo.chatId);
      }
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

export function getMyProfile() {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios({
          method: 'get',
          url: SERVER_URL + '/api/user/profile',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'multipart/form-data'
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
      }
    }
  };
}
