import React from "react";
import ReactDOM from "react-dom";
// import { Router } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Main component
import App from "./App";

// menampilkan komponent di /public/index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
