import axios from 'axios';
import {
  GET_HISTORY_PENDING,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILED
} from '../reducers/constants';

const SERVER_URL = process.env.REACT_APP_API_SERVER;

//-------action - get history -----//
export function getHistory() {
  return async dispatch => {
    dispatch({ type: GET_HISTORY_PENDING });
    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/history/',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    if (response.status === 200) {
      dispatch({ type: GET_HISTORY_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: GET_HISTORY_FAILED });
    }
  };
}
