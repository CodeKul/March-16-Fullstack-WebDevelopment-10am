const initState = {
  isLoggedIn: false,
  
};

export function authenticationReducer(state = initState, action) {
  switch (action.type) {
    case "login":
      return { isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
}
