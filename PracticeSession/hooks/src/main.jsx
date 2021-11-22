import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./index.css";

// components
import NavigationBar from "./components/navbar";

// pages
import Login from "./pages/login/";
import Home from "./pages/home/index";

const BASE_URL = "http://localhost:2000";

function Main() {
  // initialize redux
  const dispatch = useDispatch();

  // keep-login
  useEffect(() => {
    const token = localStorage.getItem("token");
    Axios.get(BASE_URL + `/users?UID=${token}`)
      .then((respond) => {
        dispatch({ type: "LOGIN", payload: respond.data[0] });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-container">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Main;
