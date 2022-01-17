import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./style.css";

const BASE_URL = process.env.REACT_APP_LOCAL_URL;
const API_URL = process.env.REACT_APP_API_URL;

function Home() {
  const [images, setImages] = useState([]);
  const [banner, setBanner] = useState([]);

  const user = useSelector((state) => state.user);
  const navigation = useNavigate();

  // side-effect
  useEffect(() => {
    // get data image
    Axios.get(API_URL + "/carousel")
      .then((respond) => {
        setImages(respond.data);

        // get image banner
        Axios.get(API_URL + "/banner").then((respond) => {
          setBanner(respond.data);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const renderCarouselItem = () => {
    return images.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${BASE_URL + item}`}
            alt={`slide-${index}`}
          />
          <Carousel.Caption>
            <h3>Sudah siap untuk belanja...?</h3>
            <Button
              variant="outline-light"
              onClick={() => navigation("products")}
            >
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  console.log("global user : ", user);
  return (
    <div className="home-container">
      <Carousel>{renderCarouselItem()}</Carousel>
      <div className="banner" style={{ background: `url(${banner[1]})` }}>
        <div className="left">
          <h1>Pocket Tee</h1>
          <p>complete the look with a basic tees style</p>
          <Button
            variant="outline-light"
            onClick={() => navigation("products/?category=tees")}
          >
            Shop Now
          </Button>
        </div>
        <div className="right" style={{ background: `url(${banner[0]})` }}>
          <h1>Long Chino</h1>
          <p>complete the look with a basic tees style</p>
          <Button
            variant="outline-light"
            onClick={() => navigation("products/?category=chino")}
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Our brand established since 1995. We make a product for daily wear.
          Looking simple and stay comfy.
        </p>
      </div>
    </div>
  );
}

export default Home;
