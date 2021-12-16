import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = (product) => {
  console.log(product);
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const removeCart = (product) => {
  return {
    type: REMOVE_CART,
    payload: product,
  };
};
