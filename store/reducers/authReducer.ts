const initState = {
  userauthtoken: null,
};

const authReducer = (state = [], action: any) => {
  console.log(state, action, "out ")
  if (action.type === 'GET_AUTH_TOKEN') {
    console.log(action, "action in")
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
