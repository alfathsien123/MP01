import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel, Button, Form } from "react-bootstrap";
import "./style.css";

const API_URL = process.env.REACT_APP_API_URL;
const LOCAL_URL = process.env.REACT_APP_LOCAL_URL;

const ProductDetails = () => {
  // local store
  const [product, setProduct] = useState("");
  const [stock, setStock] = useState("");
  const [sizeIndex, setSizeIndex] = useState(0);
  const [input, setInput] = useState(1);

  // initialize react-router-dom
  const { id } = useParams();

  // global storage
  const { UID } = useSelector((state) => {
    return {
      UID: state.user.UID,
    };
  });

  // get data from our server
  useEffect(() => {
    Axios.get(API_URL + `/products/${id}`)
      .then((res) => {
        console.log("Jawaban: ", res);
        setProduct(res.data);

        Axios.get(API_URL + `/stocks/?productsId=${id}`).then((res_stock) => {
          setStock(res_stock.data[0]);
        });
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render image details
  const renderImageDetail = () => {
    return (product.images || []).map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={LOCAL_URL + image}
            alt="First slide"
          />
        </Carousel.Item>
      );
    });
  };

  const renderButtonSizes = () => {
    return (stock.sizes || []).map((size, index) => {
      return (
        <Button
          variant="outline-primary"
          key={index}
          className="button-size"
          active={sizeIndex - 1 === index}
          onClick={() => setSizeIndex(index + 1)}
        >
          {size.size}
        </Button>
      );
    });
  };

  const onButtonPlus = () => {
    setInput(input + 1);
  };

  const onButtonMin = () => {
    if (input <= 1) return;
    setInput(input - 1);
  };

  const onButtonAddToCart = () => {
    // check stock
    if (sizeIndex === 0) {
      alert("⚠ Warning!, please choose size !");
      return;
    }
    if (!UID) {
      alert("⚠ Warning!, please login to save your cart !");
      return;
    }
    const cart = {
      userUID: UID,
      productId: Number(id),
      harga: 0,
      quantity: stock.sizes[sizeIndex - 1].stock,
    };
    Axios.post(API_URL + "/cart", cart)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    // TODO : ketika user login, get data cart
    // TODO : buat POST data to cart as an redux-action
    // TODO : urutan -> POST new cart data -> GET refresh cart data
    // TODO : protection to add to cart button -> use loading spinner + disable button while it loading
  };

  // console.log('product id : ', id)
  // console.log('product', product)
  // console.log('stock', stock)
  return (
    <div className="product-detail-container">
      <h1>Product Details</h1>
      <div className="product-detail-context">
        <div className="product-detail-left">
          <Carousel>{renderImageDetail()}</Carousel>
        </div>
        <div className="product-detail-right">
          <h2>{product.name}</h2>
          <h5>Material : {product.material}</h5>
          <h5>Weight : {product.weight} kg</h5>
          <h5>Description :</h5>
          <p>{product.description}</p>
          <h5>Size : </h5>
          <div className="button-sizes">{renderButtonSizes()}</div>
          {sizeIndex ? (
            <p>stock : {stock.sizes[sizeIndex - 1].stock} pcs</p>
          ) : null}
          <div className="add-to-cart">
            <div className="stock-input">
              <Button variant="outline-primary" onClick={onButtonMin}>
                -
              </Button>
              <Form.Control
                type="text"
                placeholder=""
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
              />
              <Button variant="outline-primary" onClick={onButtonPlus}>
                +
              </Button>
            </div>
            <Button variant="primary" onClick={onButtonAddToCart}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
