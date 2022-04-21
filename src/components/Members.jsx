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
      <div className="page-heading">
        <span>Members</span>
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

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Conference Chair</h1>
          <div className={classes.img3}></div>
          <p className={classes.name}>
            - Prof. Roohie Naaz Mir (HOD, CSE , NIT Srinagar)
          </p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Technical Chair(s)</h1>
          <p className={classes.name}>- Dr. Shaima Qureshi (NIT Srinagar)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Dharitri Rath (IIT Jammu)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Badri N subudhi (IIT Jammu)</p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publication Chair(s)</h1>
          <p className={classes.name}>
            - Dr. Ranjeet Kumar Rout (NIT Srinagar)
          </p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Vinit Jakhetiya (IIT Jammu)</p>
          <p className={classes.name}></p>
          <p className={classes.name}>
            - Dr. Saiyed Umer (Aliah University, Kolkata)
          </p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Publicity Chair(s)</h1>
          <p className={classes.name}>
            - Dr. Pramod Kumar Yadav (NIT Srinagar)
          </p>
          <p className={classes.name}></p>
          <p className={classes.name}>- Dr. Veningston K (NIT Srinagar)</p>
          <p className={classes.name}></p>
        </div>

        <div className={classes.subcontent}>
          <h1 className={classes.heading}>Organizing Secretary</h1>
          <p className={classes.name}>
            - Dr. Pramod Kumar Yadav (NIT Srinagar)
          </p>
          <p className={classes.name}>- Dr. Sparsh Sharma (NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Saiyed Umer (NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Veningston K (NIT Srinagar)</p>
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
          <p className={classes.name}>
            - Dr. Ranjeet Kumar Rout (NIT Srinagar)
          </p>
          <p className={classes.name}>- Dr. Sudhir (NIT Srinagar)</p>
          
          <p className={classes.name}>- Dr. Saiyed Umer (NIT Srinagar)</p>
          <p className={classes.name}>- Dr. Sparsh Sharma (NIT Srinagar)</p>
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
