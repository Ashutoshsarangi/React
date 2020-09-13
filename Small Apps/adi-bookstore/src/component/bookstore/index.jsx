import React from 'react';
import './style.css';

export default function BookList() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={require("../../asset/d.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../../asset/c.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../../asset/b.png")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={require("../../asset/a.png")} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
    </>
  );
}