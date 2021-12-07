import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";






import { createWrapper } from "next-redux-wrapper";
import getDataReducer from "./reducers/getDataReducer";
import tokenReducer from "./reducers/tokenReducer";
import isUserLoggedIn from "./reducers/isUserLoggedIn";
import blogDataReducer from "./reducers/blogDataReducer";
import getBlogByIdReducer from './reducers/getBlogByIdReducer'
const rootReducer = combineReducers({
  authReducer: authReducer,
  getDataReducer: getDataReducer,
  // tokenReducer: tokenReducer,
  isUserLoggedIn: isUserLoggedIn,
  blogDataReducer:blogDataReducer,
  getBlogByIdReducer:getBlogByIdReducer
});

const initStore = (initialState = null) => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore);
