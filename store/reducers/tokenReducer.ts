         
const tokenReducer = (state = [], action: any) => {
    if (action.type === 'USER_AUTH_TOKEN') {
        return {
            ...state,
            userData: action.payload,
        };
    }
    else {
        return state;
    }
};
export default tokenReducer