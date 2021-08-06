import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { bankReducer } from "./components/reducers/bankReducer";
import { rootReducer } from "./components/reducers/combineReducers";
const bankStore = createStore(rootReducer);

let x = bankStore.getState();
console.log(x);
ReactDOM.render(
  <Provider store={bankStore}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
