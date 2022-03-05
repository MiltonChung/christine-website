import * as React from "react";
import { FComponent } from "../types/common";
import { RouteComponentProps } from "react-router-dom";
import WhyAreYouCrying1 from "../assets/images/whyAreYouCrying2.jpg";
import WhyAreYouCrying2 from "../assets/images/whyAreYouCrying1.png";

type FilmProps = RouteComponentProps<{
  id: string;
}>;

const Film: FComponent<FilmProps> = ({ match }) => {
  return (
    <main id="film">
      <div className="film-info">
        <h3>Why Are You Crying? {match.params.id}</h3>
        <p>13 min. Experimental Documentary. 2020.</p>
        <p>Director, Writer, Editor, Cinematographer</p>
      </div>

      <a
        href="https://vimeo.com/429805601"
        rel="noopener noreferrer"
        target="_blank"
        className="film-link"
      >
        <div className="mask-button">
          <span className="mask">Watch film</span>
          <button type="button">Watch film</button>
        </div>
      </a>

      <div className="horizontal-line" />

      <div className="vimeo-video-container">
        <iframe
          title="vimeo"
          src="https://player.vimeo.com/video/429805601?color=ffffff&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>

      <div className="trigger-warning">
        <p>Trigger Warning: Sexual Assault/Harrassment, Rape, Mental Illness</p>
      </div>

      <div className="horizontal-line" />

      <img src={WhyAreYouCrying1} alt="" />

      <div className="film-text">
        <h3>Synopsis:</h3>
        <p>
          So often do we forget that our mothers were, and still are, women. How
          much do our mothers hide from us, and how much do those overlap with
          the secrets we keep to ourselves? This film is told through the voices
          of several first and second generation Asian American women, as a
          daughter tries to recreate the memories of her mother’s life before
          hers.
        </p>
      </div>

      <div className="horizontal-line" />

      <img src={WhyAreYouCrying2} alt="" />

      <div className="film-text">
        <h3>Credits:</h3>
        <p>
          <span>Written and Directed by:</span> Christine Lin <br />
          <span>Cinematography by:</span> Michelle Patterson, Mia Francesca
          Knox, Sandra S., Christine Lin <br />
          <span>Performed by:</span> Yu Li and Christine Lin <br />
          <span>Voices of:</span> Yu Li, Isabelle Winardi, Katelyn Li, Sarah,
          and Christine Lin <br />
          <span>Edited by:</span> Christine Lin <br />
        </p>
      </div>
    </main>
  );
};

export { Film };
