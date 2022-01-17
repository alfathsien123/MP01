import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// setup redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";

const globalStore = createStore(allReducers);

ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
