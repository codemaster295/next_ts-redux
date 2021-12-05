import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./redcers/authReducer";






import { createWrapper } from "next-redux-wrapper";
import getDataReducer from "./redcers/getDataReducer";
const rootReducer = combineReducers({
  authReducer: authReducer,
  getDataReducer:getDataReducer
});

const initStore = (initialState = initState) => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export const wrapper = createWrapper(initStore);
