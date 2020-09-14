import React from 'react';
import './style.css';
import Carousel from 'react-bootstrap/Carousel'


export default function CarouselItem() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="carouselImage">
          <img
            className="d-block w-100"
            src={require("../../asset/b.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselImage">
          <img
            className="d-block w-100"
            src={require("../../asset/c.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselImage">
          <img
            className="d-block w-100"
            src={require("../../asset/d.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carouselImage">
          <img
            className="d-block w-100"
            src={require("../../asset/a.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
