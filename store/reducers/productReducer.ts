import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ALL_PRODUCTS,
} from "../actions/types";
let token = "";
if (typeof window !== "undefined") {
  // Perform localStorage action
  token = localStorage.getItem("token");
}


export default function (state = [], {type,payload}) {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return [...payload]
    default:
      return state;
  }
}
