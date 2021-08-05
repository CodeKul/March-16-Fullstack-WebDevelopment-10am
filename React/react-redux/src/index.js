import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducer/combineReducer"

import App from "./App";

const rootElement = document.getElementById("root");

let bank = createStore(rootReducer)


// https://jasonwatmore.com/post/2020/03/02/react-hooks-redux-user-registration-and-login-tutorial-example

console.log(rootReducer)

ReactDOM.render(
  <Provider store={bank}>
    <App />
  </Provider>,
  rootElement
);
