import axios from "axios";

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
export const registerUser = (data) => {
  return async () => {
    const registrationData = await axios.post(`${process.env.baseUrl}/api/v1/register`, data)
    

      return ({
        type: "USER_REGISTER",
        payload: registrationData.data
      }
      )
    
  }
}
