import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";

// setup redux
const initial_count = {
  count: 0,
};
const initial_numb = {
  numb: 1,
};

function counter1(state = initial_count, action) {
  switch (action.type) {
    case "tambah":
      return {
        count: state.count + action.payLoad,
      };
    case "kurang":
      return {
        count: state.count - action.payLoad,
      };

    default:
      return state;
  }
}

function counter2(state = initial_numb, action) {
  switch (action.type) {
    case "kali":
      return {
        numb: state.numb * action.payLoad,
      };
    case "bagi":
      return {
        numb: state.numb / action.payLoad,
      };

    default:
      return state;
  }
}

const Reducers = combineReducers({ counter1, counter2 });
const STORE = createStore(Reducers);

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  document.getElementById("root")
);
