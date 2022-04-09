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
             <h1 className={classes.heading}>Instructions for Preparing Manuscripts</h1>
              <div className={classes.points}>
              <p className={classes.content}>
              Prospective authors are invited to submit full-length original research papers. In submitting a manuscript to CVIP 2022, authors acknowledge that no paper substantially similar in content has been or will be submitted to another journal, conference or workshop during the review period. In such a case, the paper will be rejected without review.</p>
              <p className={classes.content}>
              Papers must be electronically submitted to the Microsoft Research paper submission portal before the deadline expires without exception.
              </p>
              <p className={classes.content}>
              The paper must not exceed 12 pages in length (including all text, figures, and references). The manuscript must be submitted in pdf format only and the file size of your manuscript should not exceed 10 MB as per guidelines of Springer-CCIS Series <a href="">(Click)</a>.
              </p>
              <p className={classes.content}>
              Use a proper tool to convert the resulting source into a pdf document that has only scalable fonts with all fonts embedded.
              </p>
              <p className={classes.content}>
              The images embedded in the paper must not contain transparent pixels (i.e., an alpha-channel of a transparent color) since this could lead to problems when displaying or printing the pdf.
              </p>
              <p className={classes.content}>
              The pdf manuscript must not have Adobe Document Protection or Document Security enabled.
              </p>
            </div>   
             
            <h1 className={classes.heading}>Proceedings</h1>
             <div className={classes.points}>
             <p className={classes.content}>
             The proceedings of the conference are published by Scopus Indexed ‐ Springer, Communications in Computer and Information Science series. CCIS is abstracted/ indexed in DBLP, Google Scholar, EI-Compendex, Mathematical Reviews, SCImago, Scopus. CCIS volumes are also submitted for the inclusion in ISI Proceedings.
             </p>
             </div>

             <h1 className={classes.heading}>Preparing Your Proceedings Paper</h1>
             <div className={classes.points}>
               <p className={classes.content}>
               For your convenience, we have summarized in the “Author Guidelines” document how a proceedings paper should be structured, how elements (headings, figures, references) should be formatted using our predefined styles, etc. We also give some insight on how your paper will be typeset at CVIP. The PDF of the Authors Guidelines can be downloaded here Proceedings Guidelines for Authors.
               </p>
             </div>

             <h1 className={classes.heading}>Proceedings Guidelines for Authors</h1>
             <div className={classes.points}>
               <p className={classes.content}>
               Authors must use the manuscript template specified here. The LaTeX and Word templates can be downloaded from the following links.</p>
               <p className={classes.content}> <a href="">Latex Template</a> <br />
               <a href="">Word Template</a></p>
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