import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoPage from "./pages/TodoPage";
import MyNavbar from "./components/MyNavbar";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <TodoPage />
      </div>
    );
  }
}

export default App;
