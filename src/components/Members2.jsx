import React from 'react';
import classes from "../styles/Members2.module.css";
import Card from './Card';
import dirimg from "../assets/director.jpg";
import iitdir from "../assets/iit_director.png";
import hodimg from "../assets/prof.jpg";


function Members2() {
  return (
    <div className={classes.main}>
    <div className="page-heading">
      <span>Members</span>
    </div>
      <div className={classes.content}>
          <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Patron</button>
          </div>
          <div className={classes.patron}>
          <Card>
            <img className={classes.img} src={dirimg} alt="" />
            <p className={classes.name}>- Prof(Dr.) Rakesh Sehgal (Director, NIT Srinagar, India)</p>
        </Card>
        <Card>
          <img className={classes.img} src={iitdir} alt="" />
          <p className={classes.name}> - Prof(Dr.) Manoj Singh Gaur (Director, IIT Jammu, India)</p>
        </Card>
          </div>
          <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Conference chair</button>
          </div>
          <div className={classes.patron}>
          <Card>
            <img src={hodimg} alt="" />
            <p className={classes.name}>- Prof. Roohie Naaz Mir (HOD, CSE , NIT Srinagar, India)</p>
          </Card>
          </div>

          <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Technical chair</button>
          </div>
          <div className={classes.patron}>
          <Card>
            <img src={hodimg} alt="" />
            <p className={classes.name}>- Prof. Roohie Naaz Mir (HOD, CSE , NIT Srinagar, India)</p>
          </Card>
          </div>
      </div>
    </div>
  )
}

export default Members2;