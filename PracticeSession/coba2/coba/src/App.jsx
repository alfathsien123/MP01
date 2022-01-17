import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Validation from "./component/validation";
import Array from "./component/array";
import Home from "./component/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Validation />} />
        <Route path="/array" element={<Array />} />
      </Routes>
    </div>
  );
}

export default App;
