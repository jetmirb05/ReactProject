import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstimg from "../../src/assets/banner1.png";
import secondimg from "../../src/assets/banner2.png";
import thirdimg from "../../src/assets/banner3.png";

function Slider() {
  return (
    <>
      <Carousel style={{ width: "100%", height: "90vh" }}>
        <Carousel.Item>
          <img
            src={firstimg}
            className="d-block w-100"
            alt="First slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={secondimg}
            className="d-block w-100"
            alt="Second slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={thirdimg}
            className="d-block w-100"
            alt="Third slide"
            style={{ height: "90vh" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
