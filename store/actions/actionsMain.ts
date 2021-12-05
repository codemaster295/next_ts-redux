import axios from "axios";
import { loginTypes, registerUserTypes, searchTypes } from "../../types";

export const USER_DATA_UPDATE = "USER_DATA_UPDATE";
export const USER_FOLLOWING_ARTISTS_UPDATE = "USER_FOLLOWING_ARTISTS_UPDATE";
export const SHOW_USERNAME_DIALOG = "SHOW_USERNAME_DIALOG";
export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_AUTH_TOKEN = "USER_AUTH_TOKEN";


export const setUserAuthTOken = (payload: string) => {
  return {
    type: USER_AUTH_TOKEN,
    payload,
  };
};


export const registerUser = (data:registerUserTypes) => {
  return async () => {
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/register`, data)
    

      return ({
        type: "USER_REGISTER",
        payload: registrationData.data
      }
      )
    
  }
}
export const loginUser = (data:loginTypes) => {
  return async () => {
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/login`, data)
    

      return ({
        type: "USER_LOGIN",
        payload: registrationData.data
      }
      )
    
  }
}
export const getSearchData = (data:searchTypes)=>{
  return async () => {
    const token = localStorage.getItem('token')
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/searchdata`, data,{
      headers:{
        'Content-Type': 'application/json',
        'x-access-token':token
      }
    })    
      return ({
        type: "GET_SEARCH_DATA",
        payload:registrationData.data 
      }
      )
    
  }
}
