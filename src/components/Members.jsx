import React from 'react';
import classes from "../styles/Members.module.css";
import dirimg from "../assets/director.jpg";


function Members() {
  return (
    <div className={classes.members}>
       <div className={classes.content}>
       <h1>Chief Patron</h1>
       <img src={dirimg} alt="" />
       </div>
    </div>
  )
}

export default Members;