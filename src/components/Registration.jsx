import React from 'react';
import classes from "../styles/Registration.module.css";

function Registration() {
  return (
    <div className={classes.registration}>
       <div className={classes.content}>
          <div className={classes.heading}>
           <h1>Registration</h1>
          </div>
          <div className={classes.text}>
            <p>At least one author of each accepted paper should get a full registration.</p>
          </div>
          <div className={classes.flex}>
              <div className={classes.box1}>
                 <h2 className={classes.heading2}>Author</h2>
                 <p className={classes.text2}>IEEE Member: <span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>Non Member: <span className={classes.span}>$480.00</span></p>
                 <p className={classes.text2}>IEEE Life Member: <span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>IEEE Student Member:<span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>Student Non Member: <span className={classes.span}>$480.00</span></p>
              </div>

              <div className={classes.box2}>
                 <h2 className={classes.heading2}>Non-Author</h2>
                 <p className={classes.text2}>IEEE Member: <span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>Non Member: <span className={classes.span}>$480.00</span></p>
                 <p className={classes.text2}>IEEE Life Member: <span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>IEEE Student Member:<span className={classes.span}>$400.00</span></p>
                 <p className={classes.text2}>Student Non Member:<span className={classes.span}>$480.00</span></p>
              </div>
            </div>
            <div className={classes.center}>
            <p className={classes.text3}>
            The presenting author(s) must register to the conference before submitting the final paper. Note that even if the presenter is a student, he/she must pay a Full Registration. A paper not registered by the deadline will not be included in the proceedings of the conference. Every author can have an extra page at a cost of $100.00 each.
            </p>
            <p className={classes.text4}>
            IMPORTANT NOTE: Payments using wire transfer require an extra fee that is up to the author to pay. Authors who will use wire transfer for a payment method are advised to email a copy of the receipt to the Financial Char of the conference as well as make sure that the transfer will be complete before the start date of the conference. Any incomplete wire transfers will be subjected to removal of the paper from the proceedings.
            </p>
            </div>

            <div className={classes.fee}>
            </div>
       </div>
    </div>
  )
}

export default Registration;