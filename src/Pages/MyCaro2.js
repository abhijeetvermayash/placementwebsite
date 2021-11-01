import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/rec1.jpg";
import image2 from "../images/rec2.jpg";
import image3 from "../images/rec3.jpg";
import "./mycaro.css";

class MyCaro2 extends Component {
  render() {
    return (
      <div className="Caro">
        <Carousel infiniteLoop autoPlay>
          <div className="image">
            <img src={image1} />
          </div>
          <div className="image">
            <img src={image2} />
          </div>
          <div className="image">
            <img src={image3} />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default MyCaro2;
