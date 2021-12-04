import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import {
  USER_DATA_UPDATE,
  USER_FOLLOWING_ARTISTS_UPDATE,
  SHOW_USERNAME_DIALOG,
  USER_DATA_LOADING,
  USER_AUTH_TOKEN,
} from "../actions/actionsMain";

const initState = {
  userData: null,
  followingArtists: [],
  userLoading: false,
  isUsernameDialog: false,
  userauthtoken: null,
};

const authReducer = (state = initState, action: any) => {
  if (action.type === "USER_REGISTER") {
    return {
      ...state,
      userData: action.payload,
    };
  }
  else {
    return state;
  }
};

export default authReducer;
