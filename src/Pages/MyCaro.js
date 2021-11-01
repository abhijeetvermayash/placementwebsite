import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import "./mycaro.css";

class MyCaro extends Component {
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
export default MyCaro;
