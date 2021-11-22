import React from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";

// Main Component
class Indonesia extends React.Component {
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
    return <div className="articles">{this.renderArticles()}</div>;
  }
}

export default Indonesia;
