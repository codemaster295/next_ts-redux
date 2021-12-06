

const isUserLoggedIn = (state = [], action: any) => {
    if (action.type === "USER_LOGGED_IN") {
        return {
            ...state,
            userDataRedux: action.payload
        }
    }
    else {
        return state;
    }
}
export default isUserLoggedIn