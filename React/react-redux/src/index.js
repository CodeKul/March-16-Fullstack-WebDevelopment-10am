import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";

const rootElement = document.getElementById("root");

let bank = createStore(rootReducer)

ReactDOM.render(
  <Provider store={bank}>
    <App />
  </Provider>,
  rootElement
);
