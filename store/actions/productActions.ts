import axios from "axios";
import { returnErrors } from "./errorActions";
import { GET_ALL_PRODUCTS, REGISTER_FAIL } from "./types";

export const Products =
  () =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem('token')
      },
    };

    // Request body
   

    axios
      .get(`${process.env.baseUrl}/getproducts/all`, config)
      .then((res) =>
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };