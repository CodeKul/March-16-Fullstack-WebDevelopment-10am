import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";
import { authenticationReducer } from "./authenticationReducer";

export const rootReducer = combineReducers({
  auth: authenticationReducer,
  banking: bankReducer,
});

//store.auth.isLoggedIn
//store={
//     auth:{
//         isLoggedIn:false
//     },
//     banking:{
//         balance:0,
//         isSavings:true
//     }
// }
