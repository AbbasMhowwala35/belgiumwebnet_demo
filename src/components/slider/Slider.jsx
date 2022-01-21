import React from "react";

var Carousel = require("react-responsive-carousel").Carousel;

const Slider = () => {
  return (
    <div className="bj_slider">
      <Carousel autoPlay="3000" showArrows={false} showThumbs={false} infiniteLoop={true} renderThumbs={false} showStatus={false} swipeable={true} swipeScrollTolerance={true}>
        <div>
          <img
            alt="Slider 1"
            src="https://i.ibb.co/Wgvj8ZW/1.jpg"
          />
        </div>
        <div>
          <img
            alt="Slider 2"
            src="https://i.ibb.co/B6d6Y24/2.jpg"
          />
        </div>
        <div>
          <img
            alt="Slider 3"
            src="https://i.ibb.co/WfVcf2d/3.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
