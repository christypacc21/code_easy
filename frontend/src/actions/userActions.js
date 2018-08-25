import axios from "axios";
import { SERVER_URL } from "../config";

import { LOGIN, LOGIN_FAIL } from "../reducers/constants";

export function loginByEmail(email, password) {
  return async dispatch => {
    const { data } = await axios.post(SERVER_URL + "/api/login", {
      email,
      password
    });

    console.log("response: ", data);

    if (data) {
      dispatch({
        type: LOGIN,
        payload: data
      });
    } else {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
}
