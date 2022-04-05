import React from 'react';
import classes from "../styles/Members.module.css";
import dirimg from "../assets/director.jpg";


function Members() {
  return (
    <div className={classes.members}>
       <div className={classes.content}>
       <h1 className={classes.heading}>Chief Patron</h1>
       <img className={classes.dirimg} src={dirimg} alt="" />
       <p className={classes.name}>- Prof. (Dr.) Rakesh Sehgal</p>
       <p className={classes.name}>(Director, NIT Srinagar)</p>
       <div className={classes.subcontent}>
       <h1 className={classes.heading}>Patron</h1>
       <p className={classes.name}>- Prof. (Dr.) Sunil Khanna</p>
       <p className={classes.name}>(Director, SOT, PDEU)</p>
       </div>
       <div className={classes.subcontent}>
         <h1 className={classes.heading}>Advisory Board</h1>
         <p className={classes.name}>- Prof. (Dr.) Sunil Khanna</p>
         <p className={classes.name}>(Director, SOT, PDEU)</p>
         <p className={classes.name}>- Prof. (Dr.) Sunil Khanna</p>
         <p className={classes.name}>(Director, SOT, PDEU)</p>
         <p className={classes.name}>- Prof. (Dr.) Sunil Khanna</p>
         <p className={classes.name}>(Director, SOT, PDEU)</p>
       </div>
       <div className={classes.subcontent}>
         <h1 className={classes.heading}>General Chair</h1>
         <p className={classes.name}>- Dr. Shakti Mishra (PDEU, Gandhinagar)</p>
         <p className={classes.name}>- Dr. Shakti Mishra (PDEU, Gandhinagar)</p>
         <p className={classes.name}>- Dr. Shakti Mishra (PDEU, Gandhinagar)</p>
         <p className={classes.name}>- Dr. Shakti Mishra (PDEU, Gandhinagar)</p>
       </div>
       <div className={classes.subcontent}>
        <h1 className={classes.heading}>Technical Chair(s)</h1>
        <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
        <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>
       <div className={classes.subcontent}>
         <h1 className={classes.heading}>Publication Chair(s)</h1>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>

       <div className={classes.subcontent}>
        <h1 className={classes.heading}>Finance Chair</h1>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>

       <div className={classes.subcontent}>
         <h1 className={classes.heading}>Industry Liasion Chair</h1>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>

       <div className={classes.subcontent}>
         <h1 className={classes.heading}>Publicity Committee Chair(s)</h1>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>

       <div className={classes.subcontent}>
       <h1 className={classes.heading}>Publicity Committee</h1>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>

       <div className={classes.subcontent}>
         <h1 className={classes.heading}>Special Session Chair(s)</h1>
         <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       <p className={classes.name}>- Dr. Pankaj Kumar (DAIICT)</p>
       </div>
       </div>
    </div>
  )
}

export default Members;