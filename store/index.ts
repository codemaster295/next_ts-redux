import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";






import { createWrapper } from "next-redux-wrapper";
import getDataReducer from "./reducers/getDataReducer";
import tokenReducer from "./reducers/tokenReducer";
import isUserLoggedIn from "./reducers/isUserLoggedIn";
const rootReducer = combineReducers({
  authReducer: authReducer,
  getDataReducer: getDataReducer,
  // tokenReducer: tokenReducer,
  isUserLoggedIn: isUserLoggedIn
});

const initStore = (initialState = null) => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore);
