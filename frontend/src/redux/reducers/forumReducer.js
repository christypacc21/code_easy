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

//-----------reducer - get myPosts-----------//
const initialStateMyPosts = {
  isPending: false,
  data: {
    myposts: []
  },
  error: ''
};
export const requestMyPosts = (state = initialStateMyPosts, action = {}) => {
  switch (action.type) {
    case REQUEST_MYPOSTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MYPOSTS_SUCCESS:
      console.log('request myposts success - reducer');
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_MYPOSTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
//-----------reducer - get myComments-----------//
const initialStateMyComments = {
  isPending: false,
  data: {
    mycomments: []
  },
  error: ''
};
export const requestMyComments = (
  state = initialStateMyComments,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_MYCOMMENTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MYCOMMENTS_SUCCESS:
      console.log('request myposts success - reducer');
      return { ...state, data: action.payload, isPending: false };
    case REQUEST_MYCOMMENTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
//--------reducer - search--------//

//-----------reducer - delete comment-----------//
