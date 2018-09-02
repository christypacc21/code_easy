// import axios from 'axios';
// import {
//   REQUEST_POSTS_PENDING,
//   REQUEST_POSTS_SUCCESS,
//   REQUEST_POSTS_FAILED,
//   CREATE_POST,
//   CREATE_COMMENT,
//   DELETE_COMMENT,
//   CHANGE_SEARCH_FIELD
// } from '../reducers/constants';

// export const setSearchField = text => ({
//   type: CHANGE_SEARCH_FIELD,
//   payload: text
// });

// export const requestPosts = dispatch => {
//   dispatch({ type: REQUEST_POSTS_PENDING });
//   axios
//     .get('http://locahost:8080/api/forum/posts') //get what?:o
//     .then(data => dispatch({ type: REQUEST_POSTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }));
// };
