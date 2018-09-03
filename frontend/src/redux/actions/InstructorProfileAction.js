import axios from 'axios';
import { GET_ALL_INSTRUCTOR_PROFILE } from '../reducers/constants';

const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function getAllInstructorProfile(
  education,
  yearCodeExp,
  introduction,
  filePath,
  skills,
  displayName,
  email
) {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/user/profile',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.data.success) {
      dispatch({
        type: GET_ALL_INSTRUCTOR_PROFILE,
        payload: response.data.instructorProfile
      });
    }
  };
}
