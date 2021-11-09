import React from "react";
import ReactDOM from "react-dom";
import "../../../../todo-list/node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./app";
/*
// element : bagian terkecil dari komponen
const title = <h1>Hello React</h1>;
const paragraph = <p>This my first time using a react framework</p>;

// component -> object : 2 cara
// 1. Function
// 2. Class

// component huruf pertama harus besar
// hanya boleh return 1 div
function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    );
  }
}

// state -> membuat komponen yang kita buat bersifat dinamis
class Main extends React.Component {
  // state -> tempat untuk menyimpan data
  constructor(props) {
    super(props);
    this.state = {
      title: "Latihan React",
      count: 0,
    };
  }

  // event handler
  onButtonTambahClick = () => {
    console.log("Tambah is clicked");

    // merubah : count
    this.setState({ count: this.state.count + 1 });
    // this.setState((prevState) => ({...prevState, count: prevState.count + 1}));
  };
  onButtonKurangClick = () => {
    console.log("Tambah is clicked");

    // merubah : count
    this.setState({ count: this.state.count - 1, title: "Practice React" });
    // this.setState((prevState) => ({...prevState, count: prevState.count + 1}));
  };

  render() {
    return (
      <div>
        <h1>
          <button onClick={this.onButtonTambahClick}>Tambah</button>
          <br></br>
          {this.state.title} {this.state.count}
          <br></br>
          <button onClick={this.onButtonKurangClick}>Kurang</button>
        </h1>
      </div>
    );
  }
}
*/

// menampilkan komponen di /public/index.html
ReactDOM.render(
  // <div>
  //   {/* element */}
  //   {title}
  //   {paragraph}

  //   {/* komponen */}
  //   <Navbar />
  //   <Footer />
  //   <Main />
  // </div>
  <App />,

  document.getElementById("root")
);
