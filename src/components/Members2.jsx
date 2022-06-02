import React, { useEffect } from "react";
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
              Prof(Dr.) Rakesh Sehgal <br /> Director, NIT Srinagar
            </p>
          </Card>

          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={iitdir} alt="" />
            </div>
            <p className={classes.name}>
              {" "}
              Prof(Dr.) Manoj Singh Gaur <br />
              Director, IIT Jammu
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
              Prof. Roohie Naaz Mir <br /> HOD, CSE , NIT Srinagar
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
              Dr. Shaima Qureshi <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech2} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Dharitri Rath <br /> IIT Jammu
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech3} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Badri N subudhi <br /> IIT Jammu
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={tech4} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Vinit Jakhetiya <br /> IIT Jammu
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
              Dr. Ranjeet Kumar Rout <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org2} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Sparsh Sharma <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org3} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Pramod Kumar Yadav <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org4} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Veningston K <br /> NIT Srinagar
            </p>
          </Card>
          <Card>
            <div className={classes.container}>
              <img className={classes.img} src={org5} alt="" />
            </div>
            <p className={classes.name}>
              Dr. Saiyed Umer <br /> Aliah University, Kolkata
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
                Dr. Ranjeet Kumar Rout (NIT Srinagar)
              </p>
              <p className={classes.name2}>
                Dr. Saiyed Umer (Aliah University,Kolkata)
                <br />
              </p>
            </div>
          </div>

          <div>
            <div className={classes.buttonbox}>
              <button className={classes.shadowbutton}>Publicity Chair</button>
            </div>
            <div className={classes.names}>
              <p className={classes.name2}>
                {" "}
                Dr. Pramod Kumar Yadav (NIT Srinagar)
              </p>
              <p className={classes.name2}>Dr. Veningston K (NIT Srinagar)</p>
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
                Dr. Ranjeet Kumar Rout (NIT Srinagar)
              </p>
              <p className={classes.name2}>Dr. Sparsh Sharma (NIT Srinagar)</p>
              <p className={classes.name2}>
                Dr. Saiyed Umer (Aliah University,Kolkata){" "}
              </p>
            </div>
          </div>

          <div className={classes.flexfull}>
            <div>
              <div className={classes.buttonbox}>
                <button className={classes.shadowbutton}>
                  Local Organizing Committee
                </button>
              </div>
              <div className={classes.names2}>
                <div className={classes.margin}>
                  <p className={classes.name2}>Dr. Annu Priya</p>
                  <p className={classes.name2}>Dr. Surbhi Sharma</p>
                  <p className={classes.name2}>Sania Iqbal</p>
                  <p className={classes.name2}>Sadia Showkat</p>
                  <p className={classes.name2}>Monica</p>
                  <p className={classes.name2}>Anam Iqbal</p>
                </div>
                <div>
                  <p className={classes.name2}>Tausees Iqbal</p>
                  <p className={classes.name2}>Mehraj Tali</p>
                  <p className={classes.name2}>Sameer Dixit</p>
                  <p className={classes.name2}>Imtiaz Ahmad</p>
                  <p className={classes.name2}>Aafaq Dar</p>
                  <p className={classes.name2}>Nazir Shabbir</p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.buttonbox}>
                <button className={classes.shadowbutton}>
                  Local Technical Committee
                </button>
              </div>
              <div className={classes.names2}>
                <div className={classes.margin}>
                  <p className={classes.name2}>Mahin Sagotra</p>
                  <p className={classes.name2}>Yavar Mushtaq</p>
                  <p className={classes.name2}>Isha Tamarkar</p>
                </div>
                <div>
                  <p className={classes.name2}>Zoya Khatry</p>
                  <p className={classes.name2}>Namita Rastogi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members2;
