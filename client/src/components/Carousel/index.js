import React from 'react';
import { Carousel } from 'antd';
import {
  back2, back3, back4, back5,
} from '../../assets';
import './style.css';

function CarouselViwe() {
  return (
    <>
      <div className="carousel-container">
        <Carousel autoplay>
          <div className="image-container">
            <img src={back2} alt="slider-1" />
          </div>
          <div className="image-container">
            <img src={back3} alt="slider-2" />
          </div>
          <div className="image-container">
            <img src={back4} alt="slider-3" />
          </div>
          <div className="image-container">
            <img src={back5} alt="slider-4" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselViwe;
