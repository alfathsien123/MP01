import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Button, Modal, Spinner } from "react-bootstrap";
import { getProducts } from "../../actions/product-actions";
import "./style.css";

function Products() {
  // redux
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => {
    return {
      products: state.products.data,
      loading: state.products.loading,
    };
  });

  // initialize react-router-dom
  const { search } = useLocation();
  const navigation = useNavigate();

  // request data to api
  useEffect(() => {
    const category = search.split("=")[1] || "";
    dispatch(getProducts(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // show list products
  const renderListProducts = () => {
    return products.map((product) => {
      return (
        <Card key={product.id} id="product-card">
          <Card.Img variant="top" src={product.images[0]} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigation(`/products/detail/${product.id}`)}
            >
              Check Details
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  console.log("search : ", search);
  return (
    <div className="product-container">
      <div className="product-control">
        <h1>Products</h1>
      </div>
      <div className="product-list">{renderListProducts()}</div>
      <Modal show={loading}>
        <Modal.Body>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <p>Loading</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Products;
