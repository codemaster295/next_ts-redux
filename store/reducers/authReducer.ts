const initState = {
  userauthtoken: null,
};

const authReducer = (state = [], action: any) => {
  
  if (action.type === 'GET_AUTH_TOKEN') {
  
    return {
      ...state,
      userauthtoken: action.payload,
    };
  }
  else {
    return state;
  }
};


export default authReducer;
