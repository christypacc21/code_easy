import { GET_ALL_QUESTIONS } from '../reducers/constants';

export function getAllQuestions() {
  return async dispatch => {
    //call api
    //axios

    //if response
    const response = ['Question 1', 'Question 2', 'Questions 3'];

    dispatch({
      type: GET_ALL_QUESTIONS,
      payload: response
    });
  };
}
