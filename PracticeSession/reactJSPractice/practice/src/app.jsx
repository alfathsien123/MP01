import React from "react";

////////////////////////////////////////////////////////////////////////////////////
// main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Belajar pemograman", "Belanja baju baru", "Latihan dance"],
      task: "",
    };
  }

  // render todo-list
  renderTodoList = () => {
    return this.state.list.map((item) => {
      return <li>{item}</li>;
    });
  };

  onInputChange = (event) => {
    // console.log("value:", event.target.value);
    this.setState({ task: event.target.value });
  };

  onButtonSubmit = () => {
    // copy array
    let tempArray = [...this.state.list];
    tempArray.push(this.state.task);

    // ubah state
    this.setState({ list: tempArray, task: "" });
  };

  ////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <h1>React Todo App</h1>
        <input
          type="text"
          placeholder="masukkan task"
          onChange={this.onInputChange}
          value={this.state.task}
        ></input>
        <button onClick={this.onButtonSubmit}>Submit</button>
        <ul>{this.renderTodoList()}</ul>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////////

//export class App
export default App;
