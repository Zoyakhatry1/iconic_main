import React, { useEffect } from "react";
import pic from "../assets/nit_image.jpg";
import cseimg from "../assets/cse_image.jpg";
import classes from "../styles/About.module.css";
import abic from "../assets/abic.jpg";


function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
      <div className="page-heading">
        <span>About</span>
      </div>
      <div className={classes.about}>
        <h3 className={classes.heading}>About NIT SRINAGAR</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
              National Institute of Technology, Srinagar is one of the premier
              Educational Institutes in the Northern Regions of the country. It
              was established in 1960 and has been one of the eighteen Regional
              Engineering Colleges sponsored by the Govt. of India during the
              2nd Plan. The Institute acquired the status of National Institute
              of Technology with deemed to be University status during August,
              2003 and attained full autonomy in its Academics. The Institute is
              situated at the the banks of world-famous Dal Lake, with the
              far-famed Hazratbal Shrine on other side of the campus. NIT
              Srinagar is a residential Institute with accommodation facility in
              Hostels and Staff-Quarters. Besides running the B.Tech Programme
              the Institute also offers M.Tech programme in many streams.In
              addition to that a large number of students are registered for
              M.Phil and Ph.D Programmes.
            </p>
          </div>
          <div>
            <img className={classes.image} src={pic} alt="nit-image" />
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>Our Department</h3>
        <div className={classes.info}>
          <div>
            <img className={classes.image} src={cseimg} alt="nit-image" />
          </div>
          <div>
            <p className={classes.text}>
              The Department of Computer Science& Engineering embodies the
              Institute's tradition of excellence as a world-class leader in
              computer science and engineering education and research. CSE is in
              a period of exciting growth and opprtunity. In the current ever
              evolving industrial scenario contents delivered to the students
              are regularly updated by the faculty members who have themselves
              been at the helm of path breaking research and innovations. In
              addition to academic work, the CSE department also has computer
              science research programmes (for a full listing of specialities
              visit Research Areas) supported through government and industry
              funding. Faculty research helps define and expand the current and
              future use of technology. <br />{" "}
              <span className={classes.span}>Mission and Vision : </span> At NIT
              Srinagar, we believe that their is no dearth of scope for bright
              and vibrant stars in the firmament. We therefore persistently
              strive to inculcate the requisite acumen in the budding
              researches, innovators, enterpreneurs making them thorough and
              competent professionals, enabling them to take up and face any
              challenge in the industry or research organisation they serve.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <h3 className={classes.heading}>About IConIC</h3>
        <div className={classes.info}>
          <div>
            <p className={classes.text}>
              The Ist International Conference on Internaltional Conference on
              Intelligent Computing (IConIC) is being conducted by the
              Department of Computer Science and Engineering, National Institute
              of Technology, Srinagar, India (In Virtual Mode). IConIC- 2022
              aims to bring together Academicians, Researchers, Industry
              Experts, Enthusiasts, and Professionals to explore emerging trends
              and innovations, as well as discuss research findings and future
              directions in the area of next-generation innovations. This
              technical conference intends to provide an opportunity for
              academia and industry to share research and development
              advancements in emerging fields of Intelligent Computing. It
              offers a common platform to an interdisciplinary group of
              researchers through a strategically designed network of premier
              institutions across India. The conference has also Expert Panel
              discussions and Plenary Talks. The goal of Application of
              Internaltional Conference on Intelligent Computing (IConIC) is to
              promote and bring together the Indian and global researchers
              across the areas of Artificial Intelligence, computer vision,
              computational biology, natural language processing, and deep
              learning.
            </p>
          </div>
          <div>
            <img className={classes.image} src={abic} alt="nit-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
