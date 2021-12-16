import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";

import { createWrapper } from "next-redux-wrapper";
import getDataReducer from "./reducers/getDataReducer";
import tokenReducer from "./reducers/tokenReducer";
import isUserLoggedIn from "./reducers/isUserLoggedIn";
import errorReducer from "./reducers/errorReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  // auth: authReducer,
  // getDataReducer: getDataReducer,
  // tokenReducer: tokenReducer,
  // isUserLoggedIn: isUserLoggedIn,
  error: errorReducer,
  auth: authReducer,
  cart: cartReducer,
});

const initStore = (initialState = null) => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore);
