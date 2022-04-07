import React from 'react';
import classes from "../styles/AuthorGuidelines.module.css";
import TrackCard2 from './TrackCard2';

function AuthorGuidelines() {
  return (
    <div className={classes.main}>
       <div className={classes.content}>
          <h1 className={classes.heading}>Tracks</h1>
          <TrackCard2 />
          <div className={classes.guidelines}>
             <h1 className={classes.heading}>Instructions for Authors</h1>
              <div className={classes.points}>
              <ul className={classes.content}>
              <li>The conference is being organised in hybrid mode.</li>
              <li>Original papers based on theoretical or experimental works related to the above mentioned sub themes are solicited for presentation in the conference. The paper should begin with title, short abstract and a list of keywords. Simultaneous submissions (papers already submitted to other conferences/journals) are not allowed.
              Please do not submit plagiarized papers.</li>
              <li>The total length of the paper must not exceed eight A4 size pages including bibliography and appendices. Paper must be in PDF.</li>
              <li>All the papers will be submitted through on-line paper submission process (Easy chair submission system). Authors are requested to upload a blind copy by clicking the paper submission link :- <a href="">Submit Here</a> </li>
              <li>It is planned to publish the peer reviewed and selected papers of conference as proceedings with Springer in their prestigious “Lecture Notes in Electrical Engineering” series <a href="">(Click Here)</a>.</li>
              <li>All papers must follow strict formatting instructions, For detailed instructions for authors, kindly visit the following link: <a href="">Click Here</a> </li>
              </ul>
            </div>   
             
            <h1 className={classes.heading}>Review Process</h1>
             <div className={classes.points}>
             <p className={classes.content}>
             The conference aims at carrying out two rounds of review process. In the first round, the papers submitted by the authors will be assessed on the basis of their technical suitability, scope of work and plagiarism, to be checked by standard commercial plagiarism tool. The qualifying submissions will be double blind reviewed by at-least two experts on the basis of originality, novelty, clarity, completeness, relevance, significance and research contribution. The shortlisted papers will be accepted for presentation and presented papers will be published in the conference proceedings.
             </p>
             </div>

             <h1 className={classes.heading}>Copy Right Form</h1>
             <div className={classes.points}>
               <p className={classes.content}>
               In order to publish paper in the conference proceeding, the authors are required to submit a signed copyright form for each accepted paper during registration.
               </p>
             </div>


             <div className={classes.table}>
             <h1 className={classes.heading}>Important Dates</h1>
             <div className={classes.tablecontainer}>
          <table>
            <tr>
              <td>Submission Deadline</td>
              <td>31st July, 2021</td>
            </tr>
            <tr>
              <td>Acceptance Notification</td>
              <td>5th August, 2021</td>
            </tr>
            <tr>
              <td>Early-Bird Registrations</td>
              <td>15th August, 2021</td>
            </tr>
            <tr>
              <td>Camera-Ready Submission</td>
              <td>25th August, 2021</td>
            </tr>
            <tr>
              <td>Submission Deadline</td>
              <td>25th August, 2021</td>
            </tr>
          </table>
             </div>    
        </div>
          </div>
       </div>
    </div>
  )
}

export default AuthorGuidelines;