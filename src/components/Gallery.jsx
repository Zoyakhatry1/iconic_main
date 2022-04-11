import React from "react";
import "../styles/Gallery.css";
import nitimg from "../assets/nit_image.jpg";
import decimg from "../assets/DEC.jpg";
import junimg from "../assets/JUN2.jpg";
import labimg from "../assets/lab.jpg";
import fullimg from "../assets/nit.jpg";
import deptimg from "../assets/dept.jpg";

function Gallery() {
  return (
    <div className="main-gallery">
      <div className="container">
        <h1 className="heading">Gallery</h1>

        <div className="gallery">
          <div className="gallery-item">
            <img className="gallery-image" alt="" src={nitimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={decimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={junimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={labimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={fullimg} />
          </div>

          <div className="gallery-item">
            <img className="gallery-image" alt="" src={deptimg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
