import axios from 'axios';
import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED
  // CREATE_POST,
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // CHANGE_SEARCH_FIELD
} from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

//-----------action - request posts ( get all posts)-----------//
// export const requestPosts = dispatch => {
export const requestPosts = () => dispatch => {
  dispatch({ type: REQUEST_POSTS_PENDING });
  axios
    .get(SERVER_URL + '/api/forum/posts') //get what?:o
    .then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }));
};

//-----------action - create post-----------//
// export function createPost(postTitle, postContent, filePath) {
export function createPost(title, content, filePath) {
  return async dispatch => {
    const data = new FormData();
    data.append('title', title);
    data.append('content', content); //the names used here shd follow which file's variable name?
    data.append('inputFile', filePath[0], 'postIMG'); // ??
    const token = localStorage.getItem('token'); ////??

    const response = await axios({
      method: 'post',
      url: SERVER_URL + '/api/forum/post',
      headers: {
        Authorization: 'Bearer' + token,
        'Content-Type': 'multipart/form-data'
      },
      data
    });
    console.log('createPost res: ', response);
  };
}
//-----------action - create comment-----------//
export function createComment(content, filePath) {
  return async dispatch => {
    const data = new FormData();
    data.append('content', content); //the names used here shd follow which file's variable name?
    data.append('inputFile', filePath[0], 'commentIMG'); // ??
    const token = localStorage.getItem('token'); ////??

    const response = await axios({
      method: 'post',
      url: SERVER_URL + '/api/forum/post',
      headers: {
        Authorization: 'Bearer' + token,
        'Content-Type': 'multipart/form-data'
      },
      data
    });
    console.log('createComment res: ', response);
  };
}

//--------action - search--------//
// export const setSearchField = text => ({
//   type: CHANGE_SEARCH_FIELD,
//   payload: text
// });
