import axios from 'axios';
import { GET_ALL_QUESTIONS } from '../reducers/constants';

import {} from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

export function getAllQuestions(contents, filepath, skills) {
  return async dispatch => {
    const response = await axios.get(SERVER_URL + '/api/question/list', {
      contents,
      filepath,
      skills
    });

    dispatch({
      type: GET_ALL_QUESTIONS,
      payload: response
    });
  };
}
