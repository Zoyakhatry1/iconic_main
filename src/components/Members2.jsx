import React from 'react';
import classes from "../styles/Members2.module.css";

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
      </div>
    </div>
  )
}

export default Members2;