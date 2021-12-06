import axios from "axios";
import { loginTypes, registerUserTypes, searchTypes } from "../../types";

export const USER_DATA_UPDATE = "USER_DATA_UPDATE";
export const USER_FOLLOWING_ARTISTS_UPDATE = "USER_FOLLOWING_ARTISTS_UPDATE";
export const SHOW_USERNAME_DIALOG = "SHOW_USERNAME_DIALOG";
export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_AUTH_TOKEN = "USER_AUTH_TOKEN";

export const setUserData = (data: any) => {
  localStorage.setItem('token', data.token)
  localStorage.setItem('userdata', JSON.stringify(data.data))
  return {
    type: "USER_LOCAL_SAVE",
    payload: data
  }
}
export const userDataRedux = (data: any) => {
  let token = localStorage.getItem('token')
  let userdata = JSON.parse(localStorage.getItem('userdata'))
  let userDataRedux = { token, userdata }
  return {
    type: "USER_LOGGED_IN",
    payload: userDataRedux
  }

}
export const setUserAuthToken = (data: any) => {
  localStorage.setItem('token', data)
  return {
    type: 'USER_AUTH_TOKEN',
    payload: data,
  };
};
export const getUserAuthToken = (data: any) => {
  let token = localStorage.getItem('token')
  return {
    type: 'GET_AUTH_TOKEN',
    payload: token
  }
}
export const registerUser = (data: registerUserTypes) => {
  return async () => {
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/register`, data)
    return ({
      type: "USER_REGISTER",
      payload: registrationData.data
    }
    )
  }
}
export const loginUser = (data: loginTypes) => {
  return async () => {
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/login`, data)
    return ({
      type: "USER_LOGIN",
      payload: registrationData.data
    }
    )
  }
}
export const CreateBlog = (data: any) => {
  return async () => {
    const image = await axios.post(`${process.env.baseUrl}/api/v1/createblog/uploadimage`, data.image, {
      headers: {
        "Content-Type": "application/json",
        "content-type": "multipart/form-data",
      }
    })
    const blogData = await axios.post(`${process.env.baseUrl}/api/v1/createblog`, { image: image.data.image, ...data.blogdata })
    console.log(blogData.data, "mmoisgere")
    return ({
      type: "CREATE_BLOG",
      payload: blogData
    }
    )
  }
}
export const getSearchData = (data: searchTypes) => {
  return async () => {
    const token = localStorage.getItem('token')
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/searchdata`, data, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      }
    })
    return ({
      type: "GET_SEARCH_DATA",
      payload: registrationData.data
    }
    )
  }
}
