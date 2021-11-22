import React from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Indonesia from "./components/indonesia";
import America from "./components/america";
import Korea from "./components/korea";

// Main Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    console.log("did mount");

    // get data
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=2fd11846d6f54c05956d09209c1b5fbe"
    )
      .then((respond) => {
        console.log("res ", respond);
        this.setState({ articles: respond.data.articles });
      })
      .catch((error) => console.log("error : ", error));
  }
  //  America :"https://newsapi.org/v2/top-headlines?country=us&apiKey=0170c93dd73242b1b15d0b671412568a"

  // render data
  renderArticles = () => {
    return this.state.articles.map((item, index) => {
      return (
        <Card style={{ width: "23%", margin: "1%" }} key={index}>
          <Card.Img variant="top" src={item.urlToImage} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" href={item.url}>
              Read More
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    // console.log('render')
    // console.log("articles : ", this.state.articles);

    return (
      <div className="container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Indonesia />} />
            <Route path="/america" element={<America />} />
            <Route path="/korea" element={<Korea />} />
            <Route path="/indonesia" element={<Indonesia />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

// export
export default App;

// NOTES :
// life-cycle method : method bawaan react yang akan otomatis jalan sesuai urutan
// - componentDidMount() -> jalan setelah render pertama -> JALAN SEKALI
// - componentDidUnmount() -> jalan ketika component di ganti
// - componentDidUpdate() -> jalan ketika ada component yang berubah
// - ...etc
