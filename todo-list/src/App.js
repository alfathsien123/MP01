import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./TodoItem";
import TodoItemF from "./TodoItemF";

// Props
// -Data dari parent ke child

function App() {
  const kegiatan = "Makan";
  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem todoData={{ activity: "Makan", ID: 1 }} />
      <TodoItem todoData={{ activity: "Mandi", ID: 2 }} />
      <TodoItem todoData={{ activity: "Coding", ID: 3 }} />
      {/* <TodoItemF />
      <TodoItemF />
      <TodoItemF /> */}
    </div>
  );
}

export default App;
