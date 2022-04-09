import React from 'react';
import "../styles/Gallery.css";
import nitimg from "../assets/nit_image.jpg";
import decimg from "../assets/DEC.jpg";
import junimg from "../assets/JUN2.jpg";
import labimg from "../assets/lab.jpg";
import fullimg from "../assets/nit.jpg";
import deptimg from "../assets/dept.jpg";

function Gallery() {
  return (
    <div className='main-gallery'>
    <div class="container">

    <h1 class="heading">Gallery</h1>
  
    <div class="gallery">
  
      <div class="gallery-item">
        <img class="gallery-image" src={nitimg} />
      </div>
  
      <div class="gallery-item">
        <img class="gallery-image" src={decimg} />
      </div>
  
      <div class="gallery-item">
        <img class="gallery-image" src={junimg} />
      </div>
  
      <div class="gallery-item">
        <img class="gallery-image" src={labimg} />
      </div>
  
      <div class="gallery-item">
        <img class="gallery-image" src={fullimg} />
      </div>
  
      <div class="gallery-item">
        <img class="gallery-image" src={deptimg} />
      </div>
  
    </div>
  
  </div>
    </div>
  )
}

export default Gallery;