import axios from 'axios';
import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_POSTDETAILS_PENDING,
  REQUEST_POSTDETAILS_SUCCESS,
  REQUEST_POSTDETAILS_FAILED,
  REQUEST_MYPOSTS_PENDING,
  REQUEST_MYPOSTS_SUCCESS,
  REQUEST_MYPOSTS_FAILED,
  REQUEST_MYCOMMENTS_PENDING,
  REQUEST_MYCOMMENTS_SUCCESS,
  REQUEST_MYCOMMENTS_FAILED
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
export function requestPosts() {
  console.log('start trying action (api?)');

  return async dispatch => {
    dispatch({ type: REQUEST_POSTS_PENDING });

    const token = localStorage.getItem('token');

    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/forum/posts',
      headers: {
        Authorization: 'Bearer ' + token
        //Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwicm9sZSI6InN0dWRlbnQifQ.QBeadLcUbFkn4OwugU239EqNSvfzZ9liA9OXaCPtBFI'
      }
    });
    if (response.status === 200) {
      dispatch({ type: REQUEST_POSTS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REQUEST_POSTS_FAILED });
    }
  };
}

//-----------action - request postDetails ( get the postdetila and its comments)-----------//
// export const requestPosts = dispatch => {
export function requestPostDetails(id) {
  // console.log('start trying action (api?)');

  return async dispatch => {
    // console.log(SERVER_URL + '/api/forum/posts');
    dispatch({ type: REQUEST_POSTDETAILS_PENDING });

    const token = localStorage.getItem('token');
    const response = await axios({
      method: 'get',
      url: SERVER_URL + `/api/forum/posts/${id}`,
      headers: {
        Authorization: 'Bearer ' + token
        //Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwicm9sZSI6InN0dWRlbnQifQ.QBeadLcUbFkn4OwugU239EqNSvfzZ9liA9OXaCPtBFI'
      }
    });
    if (response.status === 200) {
      console.log(response);
      dispatch({ type: REQUEST_POSTDETAILS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REQUEST_POSTDETAILS_FAILED });
    }
  };
}
//-----------action - create post-----------//
export function createPost(title, content, filePath) {
  return async dispatch => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('content', content); //the names used here shd follow which file's variable name?
      data.append('inputFile', filePath[0], 'postIMG'); // ??
      const token = localStorage.getItem('token'); ////??
      console.log(SERVER_URL + '/api/forum/posts');
      const response = await axios({
        method: 'post',
        url: SERVER_URL + '/api/forum/posts',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        },
        data
      });
      console.log('createPost res: ', response);
    } catch (err) {
      console.log('create post error: ', err);
    }
  };
}
//-----------action - create comment-----------//
export function createComment(content, filePath, id) {
  return async dispatch => {
    try {
      const data = new FormData();
      data.append('content', content); //the names used here shd follow which file's variable name?
      data.append('inputFile', filePath[0], 'commentIMG'); // ??
      const token = localStorage.getItem('token'); ////??
      // console.log(SERVER_URL + `/api/forum/posts/${id}/comments`);
      const response = await axios({
        method: 'post',
        url: SERVER_URL + `/api/forum/posts/${id}/comments`,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        },
        data
      });
      console.log('createComment res: ', response);
    } catch (err) {
      console.log('createComment err: ', err);
    }
  };
}

//--------action - search--------//

//-----------action - delete comment-----------//

//-----------action - get myPosts-----------//
export function requestMyPosts() {
  return async dispatch => {
    dispatch({ type: REQUEST_MYPOSTS_PENDING });

    const token = localStorage.getItem('token');

    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/forum/myposts',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    if (response.status === 200) {
      dispatch({ type: REQUEST_MYPOSTS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REQUEST_MYPOSTS_FAILED });
    }
  };
}

//-----------action - get myComments-----------//
export function requestMyComments() {
  return async dispatch => {
    dispatch({ type: REQUEST_MYCOMMENTS_PENDING });

    const token = localStorage.getItem('token');

    const response = await axios({
      method: 'get',
      url: SERVER_URL + '/api/forum/mycomments',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    if (response.status === 200) {
      dispatch({ type: REQUEST_MYCOMMENTS_SUCCESS, payload: response.data });
    } else {
      dispatch({ type: REQUEST_MYCOMMENTS_FAILED });
    }
  };
}
