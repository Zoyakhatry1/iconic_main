import React, { useEffect } from "react";
import classes from "../styles/AuthorGuidelines.module.css";
import TrackCard2 from "./TrackCard2";
import "../styles/TextGlow.css";

function AuthorGuidelines({ trackArray }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.main}>
      <div className="page-heading">
        <span>Submission Details</span>
      </div>
      <div className={classes.content}>
        <section id="tracks-container">
          <h3 className="date-table-heading contacts">Tracks</h3>
          <div id="tracks">
            {trackArray.map((item) => (
              <TrackCard2 track={item} />
            ))}
          </div>
        </section>
        <div className={classes.guidelines}>
          <h1 className={classes.heading}>
            Instructions for Preparing Manuscripts
          </h1>
          <div className={classes.points}>
            <p className={classes.content}>
              Prospective authors are invited to submit full-length original
              research papers. In submitting a manuscript to IConIC 2022,
              authors acknowledge that no paper substantially similar in content
              has been or will be submitted to another journal, conference or
              workshop during the review period. In such a case, the paper will
              be rejected without review.
            </p>
            <p className={classes.content}>
              Papers must be electronically submitted to the Microsoft Research
              paper submission portal before the deadline expires without
              exception.
            </p>
            <p className={classes.content}>
              The paper must not exceed 12 pages in length (including all text,
              figures, and references). The manuscript must be submitted in pdf
              format only and the file size of your manuscript should not exceed
              10 MB as per guidelines of Springer-CCIS Series{" "}
              <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
                (Click)
              </a>
              .
            </p>
            <p className={classes.content}>
              Use a proper tool to convert the resulting source into a pdf
              document that has only scalable fonts with all fonts embedded.
            </p>
            <p className={classes.content}>
              The images embedded in the paper must not contain transparent
              pixels (i.e., an alpha-channel of a transparent color) since this
              could lead to problems when displaying or printing the pdf.
            </p>
            <p className={classes.content}>
              The pdf manuscript must not have Adobe Document Protection or
              Document Security enabled.
            </p>
          </div>

          <h1 className={classes.heading}>Proceedings</h1>
          <div className={classes.points}>
            <p className={classes.content}>
              The proceedings of the conference are published by Scopus Indexed
              ‐ Springer,
              <a href="https://www.springer.com/series/7899">
                {" "}
                Communications in Computer and Information Science series.
              </a>{" "}
              CCIS is abstracted/ indexed in DBLP, Google Scholar, EI-Compendex,
              Mathematical Reviews, SCImago, Scopus. CCIS volumes are also
              submitted for the inclusion in ISI Proceedings.
            </p>
          </div>

          <h1 className={classes.heading}>Preparing Your Proceedings Paper</h1>
          <div className={classes.points}>
            <p className={classes.content}>
              For your convenience, we have summarized in the “Author
              Guidelines” document how a proceedings paper should be structured,
              how elements (headings, figures, references) should be formatted
              using our predefined styles, etc. We also give some insight on how
              your paper will be typeset at IConIC. The PDF of the Authors
              Guidelines can be downloaded here{" "}
              <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
                Proceedings Guidelines for Authors.
              </a>
            </p>
          </div>

          <h1 className={classes.heading}>
            Proceedings Guidelines for Authors
          </h1>
          <div className={classes.points}>
            <p className={classes.content}>
              Authors must use the manuscript template specified here. The LaTeX
              and Word templates can be downloaded from the following links.
            </p>
            <p className={classes.content}>
              {" "}
              <a href={require("../assets/LaTeX2e_CVIP2022.zip")} download>
                Latex Template
              </a>{" "}
              <br />
              <a
                href={require("../assets/Microsoft_Word_CVIP-2022.zip")}
                download
              >
                Word Template
              </a>
            </p>
          </div>

          <div className={classes.table}>
            <h1 className={classes.heading}>Important Dates</h1>
            <div className="table-container red">
              <table>
                <tbody>
                  <tr>
                    <td id="important">Submission Deadline</td>
                    <td>
                      31st July, 2021<span className="glow-text">open</span>
                    </td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorGuidelines;
