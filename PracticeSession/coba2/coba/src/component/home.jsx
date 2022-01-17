import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  const navigate = useNavigate();

  const register = () => {
    return navigate("/register");
  };
  const array = () => {
    return navigate("/array");
  };
  return (
    <div className="continer">
      <div className="flex" style={{ marginTop: "20%" }}>
        <Button
          type="primary"
          size="lg"
          onClick={register}
          style={{ marginBottom: "20px", width: "200px" }}
        >
          Register
        </Button>
        <Button
          type="primary"
          size="lg"
          onClick={array}
          style={{ width: "200px" }}
        >
          Array
        </Button>
      </div>
    </div>
  );
}

export default Home;
