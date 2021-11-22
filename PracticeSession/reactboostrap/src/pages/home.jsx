import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/products">
          <button>Go to Product Page</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
