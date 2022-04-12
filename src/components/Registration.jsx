import React, { useEffect } from "react";
import classes from "../styles/Registration.module.css";

function Registration() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.registration}>
      <div className="page-heading">
        <span>Registration</span>
      </div>
      <div className={classes.content}>
        <div className={classes.text}>
          <p>
            At least one author of each accepted paper should get a full
            registration.
          </p>
        </div>
        <div className={classes.flex}>
          <div className={classes.box1}>
            <h2 className={classes.heading2}>Author</h2>
            <p className={classes.text2}>
              IEEE Member: <span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              Non Member: <span className={classes.span}>$480.00</span>
            </p>
            <p className={classes.text2}>
              IEEE Life Member: <span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              IEEE Student Member:<span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              Student Non Member: <span className={classes.span}>$480.00</span>
            </p>
          </div>

          <div className={classes.box2}>
            <h2 className={classes.heading2}>Non-Author</h2>
            <p className={classes.text2}>
              IEEE Member: <span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              Non Member: <span className={classes.span}>$480.00</span>
            </p>
            <p className={classes.text2}>
              IEEE Life Member: <span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              IEEE Student Member:<span className={classes.span}>$400.00</span>
            </p>
            <p className={classes.text2}>
              Student Non Member:<span className={classes.span}>$480.00</span>
            </p>
          </div>
        </div>
        <div className={classes.center}>
          <p className={classes.text3}>
            The presenting author(s) must register to the conference before
            submitting the final paper. Note that even if the presenter is a
            student, he/she must pay a Full Registration. A paper not registered
            by the deadline will not be included in the proceedings of the
            conference. Every author can have an extra page at a cost of $100.00
            each.
          </p>
          <p className={classes.text4}>
            IMPORTANT NOTE: Payments using wire transfer require an extra fee
            that is up to the author to pay. Authors who will use wire transfer
            for a payment method are advised to email a copy of the receipt to
            the Financial Char of the conference as well as make sure that the
            transfer will be complete before the start date of the conference.
            Any incomplete wire transfers will be subjected to removal of the
            paper from the proceedings.
          </p>
        </div>

        <div className={classes.fee}>
          <h1 className={classes.headingfee}>Registration Fees</h1>
          <div className={classes.tablecontainer}>
            <table className={classes.table}>
              <tr>
                <td rowSpan="2">
                  Student Registration (for Virtual Participation)
                </td>
                <td>IEEE/CSI Member</td>
                <td>₹4000</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>₹5000</td>
              </tr>
              <tr>
                <td rowSpan="2">
                  Student Registration (for Offline Participation)
                </td>
                <td>IEEE/CSI Member</td>
                <td>₹5000</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>₹6000</td>
              </tr>
              <tr>
                <td rowSpan="2">Faculty Registration</td>
                <td>IEEE/CSI Member</td>
                <td>₹7500</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>₹9000</td>
              </tr>
              <tr>
                <td rowSpan="2">Industry Member</td>
                <td>IEEE/CSI Member</td>
                <td>₹9000</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>₹11000</td>
              </tr>
              <tr>
                <td rowSpan="2">International Registration</td>
                <td>IEEE/CSI Member</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Others</td>
                <td>$350</td>
              </tr>
              <tr>
                <td>Attendee</td>
                <td>-</td>
                <td>₹1000</td>
              </tr>
            </table>
          </div>
        </div>

        <div className={classes.links}>
          <h1 className={classes.headingfee}>Registration Links</h1>
          <div className={classes.linkscontent}>
            <p>
              <span className={classes.spanlink}>Registration link:</span>{" "}
              <a href="https://cvent.me/m7q7Ma">https://cvent.me/m7q7Ma</a>{" "}
            </p>
            <p>
              <span className={classes.spanlink}>
                To modify your registration, click:{" "}
              </span>{" "}
              <a href="https://cvent.me/m7q7Ma">https://cvent.me/m7q7Ma</a>
            </p>
            <p>
              <span className={classes.spanlink}>Please email</span>{" "}
              <a href="registration+ICTAI@computer.org">
                registration+ICTAI@computer.org
              </a>
              <span className={classes.spanlink}>
                if you need any registration assistance. Please contact
              </span>{" "}
              <a href="nikolaos.bourbakis@wright.edu">
                nikolaos.bourbakis@wright.edu
              </a>
              <span className={classes.spanlink}>
                (CC alexiou.2@wright.edu) for questions regarding author
                submissions.
              </span>
            </p>
          </div>
        </div>

        <div className={classes.note}>
          <h4 className={classes.noteheading}>Please note the following:</h4>
          <p className={classes.notepara}>
            All deadlines in Cvent are set to 11:59 PM Eastern Time Zone (GMT
            -5:00).
          </p>
          <p className={classes.notepara}>
            CC:{" "}
            <a href="registration+ICTAI@computer.org">
              registration+ICTAI@computer.org
            </a>{" "}
            for all registration inquiries/questions
          </p>
        </div>

        <div className={classes.end}>
          <p>
            One Important Note is that Author Registration requires the paper ID
            from easychair.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
