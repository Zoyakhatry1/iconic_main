import "../styles/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from '../assets/nit_image.jpg';
function Home() {
  return (
    <>
      <section className="main-carousel">
        <Carousel
          {...{
            showArrows: false,
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            autoPlay: true,
            useKeyboardArrows: true,
            transitionTime: 1000,
            interval: 7000,
            dynamicHeight: false,
          }}
          width="100vw"
          animationHandler="fade"
          swipeable={false}
        >
          <div className="slide-item">
            <img src={require("../assets/nit_image.jpg")} alt="" />
            <div className="slide-content">
              <h1>The next age of Artificial Computing</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                consectetur
              </h6>
            </div>
          </div>
          <div className="slide-item">
            <img src={require("../assets/scene.jpg")} alt="" />
            <div className="slide-content">
              <h1>The next age of Artificial Computing</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                consectetur
              </h6>
            </div>
          </div>
          <div className="slide-item">
            <img
              src={require("../assets/jason-blackeye-10ui0BryWK8-unsplash.jpg")}
              alt=""
            />
            <div className="slide-content">
              <h1>The next age of Artificial Computing</h1>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit amet
                consectetur
              </h6>
            </div>
          </div>
        </Carousel>
      </section>
      <section id="section-two"></section>
    </>
  );
}
export default Home;
