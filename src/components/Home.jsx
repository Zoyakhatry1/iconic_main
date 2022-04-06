import "../styles/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import ProfileCard from "./ProfileCard";
import TrackCard from "./TrackCard";
import TrackCard2 from "./TrackCard2";
import Contact from "./Contact";
function Home() {
  const [slidePercent, setSlidePercent] = useState("");
  function setWidth(width) {
    if (width > 1110) {
      return 30;
    } else if (width > 600) {
      return 50;
    }
  }
  useEffect(() => {
    let screen = setWidth(window.innerWidth);
    if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    console.log(screen);
    window.onresize = function () {
      let screen = setWidth(window.innerHeight);
      if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    };
  }, []);
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
            stopOnHover: false,
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
      <section id="speakers-carousel">
        <Carousel
          centerMode
          {...{
            showArrows: false,
            infiniteLoop: true,
            showStatus: false,
            showThumbs: false,
            autoPlay: true,
            useKeyboardArrows: true,
            transitionTime: 1000,
            interval: 3000,
            centerSlidePercentage: 35,
          }}
          width="100vw"
        >
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
          <div className="slide-item speaker">
            <ProfileCard />
          </div>
        </Carousel>
      </section>
      <section id="quote">
        <div className="quote-content">
          <blockquote>
            <i class="fas fa-quote-left"></i>
            Predicting the future isn't magic, it's Artificial Intelligence.
            <i class="fa fa-quote-right"></i>
          </blockquote>
          <cite>~ Dave Waters</cite>
        </div>
      </section>
      <section id="tracks">
        <TrackCard />
        <TrackCard2 />
      </section>
      <section id="table">
        <h3 className="date-table-heading">Important Dates</h3>
        <div className="table-container">
          <table>
            <tr>
              <td>Submission Deadline</td>
              <td>31st July, 2021</td>
            </tr>
            <tr>
              <td>Acceptance Notification</td>
              <td>5th August, 2021</td>
            </tr>
            <tr>
              <td>Early-Bird Registrations</td>
              <td>15th August, 2021</td>
            </tr>
            <tr>
              <td>Camera-Ready Submission</td>
              <td>25th August, 2021</td>
            </tr>
            <tr>
              <td>Submission Deadline</td>
              <td>25th August, 2021</td>
            </tr>
          </table>
        </div>
      </section>
      <Contact />
    </>
  );
}
export default Home;
