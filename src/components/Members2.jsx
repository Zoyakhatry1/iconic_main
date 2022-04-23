import React,{useEffect} from "react";
import classes from "../styles/Members2.module.css";
import Card from "./Card";
import dirimg from "../assets/director.jpg";
import iitdir from "../assets/iit_director.png";
import hodimg from "../assets/prof.jpg";
import tech1 from "../assets/16.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.jpg";
import tech4 from "../assets/tech4.jpg";
import org1 from "../assets/org1.jpg";
import org2 from "../assets/org2.jpg";
import org3 from "../assets/org3.jpg";
import org4 from "../assets/org4.jpg";
import org5 from "../assets/org5.jpg";



function Members2() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
            <div className={classes.container}>
            <img className={classes.img} src={dirimg} alt="" />
            </div>
            <p className={classes.name}>
              - Prof(Dr.) Rakesh Sehgal (Director, NIT Srinagar, India)
            </p>
          </Card>

          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={iitdir} alt="" />
            </div>
            <p className={classes.name}>
              {" "}
              - Prof(Dr.) Manoj Singh Gaur (Director, IIT Jammu, India)
            </p>
          </Card>
        </div>
        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Conference chair</button>
        </div>
        <div className={classes.patron}>
          <Card>
           <div className={classes.container}> 
             <img className={classes.img} src={hodimg} alt="" />
           </div>
            <p className={classes.name}>
              - Prof. Roohie Naaz Mir (HOD, CSE , NIT Srinagar, India)
            </p>
          </Card>
        </div>

        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Technical chair</button>
        </div>
        <div className={classes.patron}>
          <Card>
            <div className={classes.container}>
            <img className={classes.img} src={tech1} alt="" />
            </div>
            <p className={classes.name}>
            - Dr. Shaima Qureshi (NIT Srinagar, India
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={tech2} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Dharitri Rath (IIT Jammu, India)
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={tech3} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Badri N subudhi (IIT Jammu, India)
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={tech4} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Vinit Jakhetiya (IIT Jammu, India)
            </p>
          </Card>
        </div>

        <div className={classes.buttonbox}>
          <button className={classes.shadowbutton}>Organizing Secretary</button>
        </div>
        <div className={classes.patron}>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={org1} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Ranjeet Kumar Rout (NIT Srinagar, India)
            </p>
          </Card>
          <Card>

          <div className={classes.container}>
            <img className={classes.img} src={org2} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Sparsh Sharma (NIT Srinagar, India)
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={org3} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Pramod Kumar Yadav (NIT Srinagar)
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
          <img className={classes.img} src={org4} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Veningston K (NIT Srinagar, India)
            </p>
          </Card>
          <Card>
          <div className={classes.container}>
            <img className={classes.img} src={org5} alt="" />
          </div>
            <p className={classes.name}>
            - Dr. Saiyed Umer (Aliah University, Kolkata, India)
            </p>
          </Card>
        </div>

        <div className={classes.flex}>
          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Publication Chair
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                {" "}
                - Dr. Ranjeet Kumar Rout (NIT Srinagar, India)
              </p>
              <p className={classes.name2}>
                - Dr. Saiyed Umer (Aliah University, Kolkata, India)
              </p>
            </div>
          </div>

          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Publicity Chair
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                {" "}
                - Dr. Pramod Kumar Yadav (NIT Srinagar, India)
              </p>
              <p className={classes.name2}>
              - Dr. Veningston K (NIT Srinagar, India)
              </p>
            </div>
          </div>

          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Finance Committee
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                {" "}
                - Dr. Ranjeet Kumar Rout (NIT Srinagar, India)
              </p>
              <p className={classes.name2}>- Dr. Sparsh Sharma (NIT Srinagar, India)</p>
              <p className={classes.name2}>
              - Dr. Sudhir (NIT Srinagar, India)
              </p>
              <p className={classes.name2}>- Dr. Saiyed Umer (NIT Srinagar, India)</p> 
            </div>
          </div>
          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>
                Local Organizing Committee
              </button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                {" "}
                - Dr. Annu Priya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members2;
