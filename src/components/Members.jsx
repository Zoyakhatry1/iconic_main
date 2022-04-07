import React, { useEffect } from "react";
import classes from "../styles/Members.module.css";
import dirimg from "../assets/director.jpg";
import iitdirimg from "../assets/iit_director.png";
import profimg from "../assets/prof.jpg";

function Members() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.members}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Chief Patron</h1>
        <img className={classes.dirimg} src={dirimg} alt="" />
        <p className={classes.name}>- Prof(Dr.) Rakesh Sehgal</p>
        <p className={classes.name}>(Director, NIT Srinagar)</p>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Patron</h1>
          <img className={classes.dirimg} src={iitdirimg} alt="" />
          <p className={classes.name}>- Prof(Dr.) Manoj Singh Gaur</p>
          <p className={classes.name}>(Director, IIT Jammu)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Conference Chair</h1>
          <img className={classes.dirimg} src={profimg} alt="" />
          <p className={classes.name}>- Prof. Roohie Naaz Mir</p>
          <p className={classes.name}>(HOD, CSE , NIT Srinagar)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Technical Chair(s)</h1>
          <p className={classes.name}>- Dr. Shaima Qureshi</p>
          <p className={classes.name}>(NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Dharitri Rath</p>
          <p className={classes.name}>(IIT Jammu)</p>
          <p className={classes.name}>- Dr. Badri N subudhi</p>
          <p className={classes.name}>(IIT Jammu)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publication Chair(s)</h1>
          <p className={classes.name}>- Dr. Ranjeet Kumar Rout</p>
          <p className={classes.name}>(NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Vinit Jakhetiya</p>
          <p className={classes.name}>(IIT Jammu)</p>
          <p className={classes.name}>- Dr. Saiyed Umer</p>
          <p className={classes.name}>(Aliah University, Kolkata)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publicity Chair(s)</h1>
          <p className={classes.name}>- Dr. Pramod Kumar Yadav</p>
          <p className={classes.name}>(NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Veningston K</p>
          <p className={classes.name}>(NIT Srinagar)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Organizing Secretary</h1>
          <p className={classes.name}>- Dr. Sparsh Sharma</p>
          <p className={classes.name}>- Dr. Saiyed Umer</p>
          <p className={classes.name}>- Dr. Pramod Kumar Yadav</p>
          <p className={classes.name}>- Dr. Veningston K</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Organizing Committee</h1>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Finance Committee</h1>
          <p className={classes.name}>- Dr. Sudhir</p>
          <p className={classes.name}>- Dr. Ranjeet Kumar Rout</p>
          <p className={classes.name}>- Dr. Saiyed Umer</p>
          <p className={classes.name}>- Dr. Sparsh Sharma</p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Technical Programme Committee</h1>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
          <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        </div>
      </div>
    </div>
  );
}

export default Members;
