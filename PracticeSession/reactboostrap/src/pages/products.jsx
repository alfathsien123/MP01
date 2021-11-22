import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Ale", gender: "male" },
        { id: 2, name: "Calvin", gender: "male" },
        { id: 3, name: "Alif", gender: "male" },
        { id: 4, name: "Reyna", gender: "female" },
        { id: 5, name: "Syaogi", gender: "male" },
      ],
    };
  }

  renderCardList = () => {
    return this.state.students.map((item, index) => {
      return (
        <Card style={{ width: "18rem" }} key={item.id}>
          <Card.Body>
            <Card.Title>Student ID : {item.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Name : {item.name}
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Gender : {item.gender}</Card.Link>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Product Page</h1>
        {this.renderCardList()}
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </div>
    );
  }
}

export default ProductPage;
