import axios from 'axios';
import { GET_ALL_QUESTIONS } from '../reducers/constants';

const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function getAllQuestions(contents, filepath, skills) {
  return async dispatch => {
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/question/list',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('all q: ', response);

    if (response.data.success) {
      dispatch({
        type: GET_ALL_QUESTIONS,
        payload: response.data.questionList
      });
    }
  };
}
