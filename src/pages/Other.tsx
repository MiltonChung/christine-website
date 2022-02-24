import * as React from "react";
import AnitaInterview from "../assets/images/AnitaInterview.jpeg";
import { ReactComponent as ExternalLinkIcon } from "../assets/icons/externalLink.svg";

const Other = () => {
  return (
    <main id="other">
      <h2>Collaborations</h2>

      <div className="collaborations-container">
        <div className="collaboration">
          <div className="left-pane">
            <img src={AnitaInterview} alt="" />
          </div>
          <div className="right-pane">
            <div className="collaboration-info">
              <h4>WWW (Women's World War)</h4>
              <p>Interview with Anita Chang</p>
              <p>regarding experimental and feminist filmmaking</p>
            </div>

            <a
              href="https://sites.google.com/ucsc.edu/femexfilmarchive/filmmaker-index/anita-chang"
              target="_blank"
              rel="noreferrer"
              className="link-button collab-btn"
            >
              Check it out! <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className="collaboration">
          <div className="left-pane">
            <img src={AnitaInterview} alt="" />
          </div>
          <div className="right-pane">
            <div className="collaboration-info">
              <h4>WWW (Women's World War)</h4>
              <p>Interview with Anita Chang</p>
              <p>regarding experimental and feminist filmmaking</p>
            </div>

            <a
              href="https://sites.google.com/ucsc.edu/femexfilmarchive/filmmaker-index/anita-chang"
              target="_blank"
              rel="noreferrer"
              className="link-button collab-btn"
            >
              Check it out! <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className="collaboration">
          <div className="left-pane">
            <img src={AnitaInterview} alt="" />
          </div>
          <div className="right-pane">
            <div className="collaboration-info">
              <h4>WWW (Women's World War)</h4>
              <p>Interview with Anita Chang</p>
              <p>regarding experimental and feminist filmmaking</p>
            </div>

            <a
              href="https://sites.google.com/ucsc.edu/femexfilmarchive/filmmaker-index/anita-chang"
              target="_blank"
              rel="noreferrer"
              className="link-button collab-btn"
            >
              Check it out! <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className="collaboration">
          <div className="left-pane">
            <img src={AnitaInterview} alt="" />
          </div>
          <div className="right-pane">
            <div className="collaboration-info">
              <h4>WWW (Women's World War)</h4>
              <p>Interview with Anita Chang</p>
              <p>regarding experimental and feminist filmmaking</p>
            </div>

            <a
              href="https://sites.google.com/ucsc.edu/femexfilmarchive/filmmaker-index/anita-chang"
              target="_blank"
              rel="noreferrer"
              className="link-button collab-btn"
            >
              Check it out! <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="video-showcase">
        <div className="line-height-sm">
          <div className="ind-video">
            <a
              href="https://sites.google.com/ucsc.edu/femexfilmarchive/filmmaker-index/anita-chang"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AnitaInterview} className="image" alt="" />
              <div className="middle"></div>
              <div className="text text-femex">FEMEXFILMARCHIVE</div>
            </a>
          </div>
          <p className="collab-title text-md mt-3 text-center bold">
            FEMEXFILMARCHIVE
          </p>
        </div>
      </div> */}
    </main>
  );
};

export { Other };
