import axios from 'axios';
import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_POSTDETAILS_PENDING,
  REQUEST_POSTDETAILS_SUCCESS,
  REQUEST_POSTDETAILS_FAILED
  // CREATE_POST,
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // CHANGE_SEARCH_FIELD,
  // REQUEST_MYPOSTS,
  // REQUEST_MYCOMMENTS,
} from '../reducers/constants';
const SERVER_URL = process.env.REACT_APP_API_SERVER;

//-----------action - request posts ( get all posts)-----------//
// export const requestPosts = dispatch => {
export const requestPosts = () => {
  console.log('start trying action (api?)');

  return async dispatch => {
    // console.log(SERVER_URL + '/api/forum/posts');
    dispatch({ type: REQUEST_POSTS_PENDING });

    const token = localStorage.getItem('token');

    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/forum/posts',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    if (response.status === 200) {
      dispatch({ type: REQUEST_POSTS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REQUEST_POSTS_FAILED });
    }
  };
};

//-----------action - request postDetails ( get the postdetila and its comments)-----------//
// export const requestPosts = dispatch => {
export const requestPostDetails = () => {
  // console.log('start trying action (api?)');

  return dispatch => {
    // console.log(SERVER_URL + '/api/forum/posts');
    dispatch({ type: REQUEST_POSTDETAILS_PENDING });
    axios
      .get('http://localhost:8080/api/forum/posts/:id', {
        //this this route? where to get the value of :id?
        headers: {
          Authorization:
            'Bearer ' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwicm9sZSI6InN0dWRlbnQifQ.QBeadLcUbFkn4OwugU239EqNSvfzZ9liA9OXaCPtBFI'
          // Authorization: 'Bearer ' + 'localStorage.getItem('token')'
        }
      })
      .then(response =>
        dispatch({ type: REQUEST_POSTDETAILS_SUCCESS, payload: response.data })
      )
      .catch(error =>
        dispatch({ type: REQUEST_POSTDETAILS_FAILED, payload: error })
      );
  };
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
      // url: SERVER_URL + '/api/forum/post',
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
      // url: SERVER_URL + '/api/forum/post',
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

//-----------action - delete comment-----------//

//-----------action - get myPosts-----------//

//-----------action - get myComments-----------//
