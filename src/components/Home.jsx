import "../styles/home.css";
import "../styles/TextGlow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ProfileCard from "./ProfileCard";
import TrackCard2 from "./TrackCard2";
import Contact from "./Contact";
import { Link } from "react-router-dom";
function Home({ scrollToTarget }) {
  const location = useLocation();
  const tracks = useRef();
  const speakers = useRef();
  const [slidePercent, setSlidePercent] = useState("");
  function setWidth(width) {
    if (width > 1110) {
      return 30;
    } else if (width > 600) {
      return 50;
    }
  }
  useEffect(() => {
    if (location.hash === "#tracks") scrollToTarget(tracks.current);
    else if (location.hash === "#speakers") scrollToTarget(speakers.current);
    else
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    let screen = setWidth(window.innerWidth);
    if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    window.onresize = function () {
      let screen = setWidth(window.innerHeight);
      if (!slidePercent && screen !== slidePercent) setSlidePercent(screen);
    };
  }, [location]);
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
              <div className="sub-text">
                The Ist International Conference on{" "}
              </div>
              <h1>Intelligent Computing</h1>
              <div className="sub-text">
                by CSE Department | NIT Srinagar | IIT Jammu
              </div>
            </div>
          </div>
          <div className="slide-item">
            <img src={require("../assets/scene.jpg")} alt="" />
            <div className="slide-content">
              <div className="sub-text">
                The Ist International Conference on{" "}
              </div>
              <h1>Intelligent Computing</h1>
              <div className="sub-text">
                by CSE Department | NIT Srinagar | IIT Jammu
              </div>
            </div>
          </div>
          <div className="slide-item">
            <img
              src={require("../assets/jason-blackeye-10ui0BryWK8-unsplash.jpg")}
              alt=""
            />
            <div className="slide-content">
              <div className="sub-text">
                The Ist International Conference on{" "}
              </div>
              <h1>Intelligent Computing</h1>
              <div className="sub-text">
                by CSE Department | NIT Srinagar | IIT Jammu
              </div>
            </div>
          </div>
        </Carousel>
      </section>
      <section id="section-two">
        <div className="about-iconic">
          <img src={require("../assets/nit_image.jpg")} alt="" />
          <div className="about-text">
            <div className="text-heading">About Iconic</div>
            The Ist International Conference on Internaltional Conference on
            Intelligent Computing (IConIC) is being conducted by the Department
            of Computer Science and Engineering, National Institute of
            Technology, Srinagar, India (In Virtual Mode). IConIC- 2022 aims to
            bring together Academicians, Researchers, Industry Experts,
            Enthusiasts, and Professionals to explore emerging trends and
            innovations <Link to="/about">...read more</Link>
          </div>
        </div>
      </section>
      <section id="speakers-carousel" ref={speakers}>
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
            <i className="fas fa-quote-left"></i>
            Predicting the future isn't magic, it's Artificial Intelligence.
            <i className="fa fa-quote-right"></i>
          </blockquote>
          <cite>~ Dave Waters</cite>
        </div>
      </section>
      <section id="tracks-container" ref={tracks}>
        <h3 className="date-table-heading contacts">Tracks</h3>
        <div id="tracks">
          <TrackCard2 />
          <TrackCard2 />
          <TrackCard2 />
          <TrackCard2 />
          <TrackCard2 />
        </div>
      </section>
      <section id="table">
        <h3 className="date-table-heading">Important Dates</h3>
        <div className="table-container">
          <table>
            <tr id="important">
              <td>Submission Deadline</td>
              <td>
                31st July, 2021 <span className="glow-text">open</span>
              </td>
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
