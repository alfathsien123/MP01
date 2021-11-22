import React from "react";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { incNumber, decNumber } from "./redux/actions";

class App extends React.Component {
  render() {
    return (
      <div style={styling.mainCont}>
        <div style={styling.container}>
          <Button size="lg" variant="danger" onClick={this.props.decNumber}>
            -
          </Button>
          <h1 style={{ fontSize: "300px" }}>{this.props.number}</h1>
          <Button size="lg" variant="success" onClick={this.props.incNumber}>
            +
          </Button>
        </div>
      </div>
    );
  }
}

const styling = {
  mainCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'yellow',
    height: "100vh",
  },
  container: {
    display: "flex",
    // backgroundColor: 'salmon',
    width: "500px",
    height: "500px",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

const mapStateToProps = (globalState) => {
  return {
    number: globalState.numberReducer.number,
  };
};

export default connect(mapStateToProps, { incNumber, decNumber })(App);
