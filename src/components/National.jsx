import React from 'react';
import "../styles/App.css";
import classes from "../styles/Members.module.css";

function National() {
  return (
    <div>
    <div className="page-heading">
    <span>National Committee</span>
     </div>
      
     <div className={classes.content}>
        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Chief Patron</h1>
          <div className={classes.img1}></div>
          <p className={classes.name}>
            - Prof(Dr.) Rakesh Sehgal (Director, NIT Srinagar)
          </p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Patron</h1>
          <div className={classes.img2}></div>
          <p className={classes.name}>
            - Prof(Dr.) Manoj Singh Gaur (Director, IIT Jammu)
          </p>
        </div>
        </div>
    </div>
  )
}

export default National;