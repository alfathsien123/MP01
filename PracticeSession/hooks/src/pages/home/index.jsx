import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Carousel, Button } from "react-bootstrap";

const BASE_URL = "http://localhost:3000";

function Home() {
  const [images, setImages] = useState([
    // images : state / variabel
    // setImages : function mengubah images (seperti this.setStae)

    // "/images/landing/1-jpg-1024x540.jpg",
    // "/images/landing/2-jpg-1024x540.jpg",
    // "/images/landing/3-jpg-1024x540.jpg",
    "/image/1-jpg-1024x540.jpg",
    "/image/2-1024x540.jpg",
    "/image/3-1024x540.jpg",
  ]);

  const user = useSelector((state) => state.user);

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
            <Button variant="outline-light">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };

  console.log("global user : ", user);
  console.log(renderCarouselItem());
  return (
    <div>
      <Carousel>{renderCarouselItem()}</Carousel>
    </div>
  );
}

export default Home;
