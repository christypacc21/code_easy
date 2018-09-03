import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  CREATE_POST,
  CREATE_COMMENT,
  DELETE_COMMENT,
  CHANGE_SEARCH_FIELD
} from '../reducers/constants';

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_POST:
//       return {};
//   }
// };

// const initialSearchState = { searchField: '' };
// export const searchPosts = (state = initialSearchState, action = {}) => {
//   switch (action.type) {
//     case CHANGE_SEARCH_FIELD:
//       return { ...state, searchField: action.payload };
//     default:
//       return state;
//   }
// };
