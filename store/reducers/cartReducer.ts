import { ADD_CART, REMOVE_CART } from "../actions/types";

export default (state = [], action) => {
  console.log("coming here", action.type);
  switch (action.type) {
    case ADD_CART:
      return [...state, action.payload];
    // ...action.payload,
    case REMOVE_CART:
      return state.filter((x) => {
        return x._id !== action.payload._id;
      });
    default:
      return state;
  }
};
