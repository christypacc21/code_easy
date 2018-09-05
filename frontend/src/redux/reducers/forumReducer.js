import {
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_POSTDETAILS_PENDING,
  REQUEST_POSTDETAILS_SUCCESS,
  REQUEST_POSTDETAILS_FAILED
  // CREATE_POST
  // CREATE_COMMENT,
  // DELETE_COMMENT,
  // CHANGE_SEARCH_FIELD
  // REQUEST_MYPOSTS,
  // REQUEST_MYCOMMENTS,
} from '../reducers/constants';

//--------reducer - request posts (get all posts)--------//
const initialStatePosts = {
  isPending: false,
  data: {
    posts: []
  },
  error: ''
};
export const requestPosts = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case REQUEST_POSTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_POSTS_SUCCESS:
      console.log('request success reducer');
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_POSTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
//-----------reducer - request postDetails and comments ( get the postdetila and its comments)-----------//
const initialStatePostDetails = {
  isPending: false,
  data: {
    postDetails: {},
    comments: []
  },
  error: ''
};
export const requestPostDetails = (
  state = initialStatePostDetails,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_POSTDETAILS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_POSTDETAILS_SUCCESS:
      console.log('request success reducer' + [...action.payload]);
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_POSTDETAILS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

//----------- reducer -  create post-----------//
// const initialStateCreatePost = {
//   postTitle: '',
//   postContent: '',
//   filePath: []
// }
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_POST:
//       return {};
//   }
// };
//-----------reducer - create comment-----------//

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

//-----------reducer - delete comment-----------//

//-----------reducer - get myPosts-----------//

//-----------reducer - get myComments-----------//
