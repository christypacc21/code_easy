import { LOGIN } from "./constants";

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
