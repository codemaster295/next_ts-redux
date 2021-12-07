const blogDataReducer = (state=[] , action:any)=>{
  console.log("running reducer")
  switch (action.type) {
    case 'GET_BLOG_DATA':
      return action.payload;
  }
  return state;
}

export default blogDataReducer