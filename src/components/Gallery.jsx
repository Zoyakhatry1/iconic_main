import React, { useEffect } from "react";
import "../styles/Gallery.css";
import nitimg from "../assets/nit_image.jpg";
import decimg from "../assets/DEC.jpg";
import junimg from "../assets/JUN2.jpg";
import labimg from "../assets/lab.jpg";
import fullimg from "../assets/nit.jpg";
import deptimg from "../assets/dept.jpg";

function Gallery() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="main-gallery">
      <div className="page-heading">
        <span>Gallery</span>
      </div>
      <div className="container">
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
