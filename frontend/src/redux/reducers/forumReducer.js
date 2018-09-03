import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED
  // CREATE_POST,
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // CHANGE_SEARCH_FIELD
} from '../reducers/constants';

//--------reducer - request posts (get all posts)--------//
const initialStatePosts = {
  isPending: false,
  posts: [],
  error: ''
};
export const requestPosts = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case REQUEST_POSTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_POSTS_SUCCESS:
      return { ...state, posts: action.payload, isPending: false };
    case REQUEST_POSTS_FAILED:
      return { ...state, isPending: false };
    default:
      return state;
  }
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_POST:
//       return {};
//   }
// };

//--------reducer - search--------//
// const initialStateSearch = { searchField: '' };
// export const searchPosts = (state = initialStateSearch, action = {}) => {
//   switch (action.type) {
//     case CHANGE_SEARCH_FIELD:
//       return { ...state, searchField: action.payload };
//     default:
//       return state;
//   }
// };
