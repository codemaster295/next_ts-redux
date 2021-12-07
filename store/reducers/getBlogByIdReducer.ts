const getBlogByIdReducer =(state=[],action)=>{
  switch (action.type) {
    case 'GET_BLOG_BY_ID':
      return action.payload;
  }
  return state;
}
export default getBlogByIdReducer