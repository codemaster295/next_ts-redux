const getDataReducer = (state=[] , action:any)=>{
  if(action.type ==="GET_SEARCH_DATA"){
    return{
      ...state,
      blogData:action.payload
    }
  }
  else {
    return state;
  }
}
export default getDataReducer