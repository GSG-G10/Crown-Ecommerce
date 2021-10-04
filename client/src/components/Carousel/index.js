import React, { Fragment } from "react";
import { Carousel } from "antd";
import { back2, back3, back4, back5 } from "../../assets";
import "./style.css";

function CarouselViwe() {
  return (
    <Fragment>
      <div className="carousel-container">
        <Carousel autoplay>
          <div className="image-container">
            <img src={back2} alt="" />
          </div>
          <div className="image-container">
            <img src={back3} alt="" />
          </div>
          <div className="image-container">
            <img src={back4} alt="" />
          </div>
          <div className="image-container">
            <img src={back5} alt="" />
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
}

export default CarouselViwe;
