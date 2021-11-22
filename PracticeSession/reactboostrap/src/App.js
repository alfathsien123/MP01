import React from "react";
import "./style.css";

import NavigationBar from "./components/navbar";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";

// Main Component
class App extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { task: "belajar pemprograman js", status: false },
        { task: "belajar dart", status: false },
        { task: "belajar typescript", status: false },
      ],
      task: "",
    };
  }

  // render todo-list
  renderTodoList = () => {
    return this.state.list.map((item, index) => {
      return (
        <li key={index} className={item.status === true ? "task-done" : ""}>
          {item.task}
          <button onClick={() => this.onButtonDeleteClick(index)}>
            Delete
          </button>
          <button onClick={() => this.onButtonDoneClick(index)}>Done</button>
          {/* <button value={index} onClick={this.onButtonDeleteClick}>Delete</button> */}
        </li>
      );
    });
  };
  // [<li>belajar pemprograman</li>, <li>belanja baju baru</li>, <li>latihan dance</li>]

  onInputChange = (event) => {
    // console.log('input change')
    // console.log('value : ', event.target.value)
    this.setState({ task: event.target.value });
  };

  onButtonSubmit = () => {
    // check user input
    if (this.state.task === "") return;

    // copy array
    let tempArray = [...this.state.list];
    tempArray.push(this.state.task);

    // ubah state
    this.setState({ list: tempArray, task: "" });
  };

  onButtonDeleteClick = (index) => {
    console.log("delete clicked", index);

    // copy array
    let tempArray = [...this.state.list];
    tempArray.splice(index, 1);

    // ubah state
    this.setState({ list: tempArray });
  };

  onButtonDoneClick = (index) => {
    // protection
    if (this.state.list[index].status === true) return;

    //copy array
    let tempArray = [...this.state.list];
    tempArray[index].status = true;

    // ubah state
    this.setState({ list: tempArray });
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <h1 className="title">React Todo App</h1>
        <input
          type="text"
          placeholder="masukan task"
          value={this.state.task}
          onChange={this.onInputChange}
        />
        <button onClick={this.onButtonSubmit}>Submit</button>

        <ul>{this.renderTodoList()}</ul>
      </div>
    );
  }
}

// export
export default App;
