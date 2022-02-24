import * as React from "react";
import { Link } from "react-router-dom";
import WhyAreYouCrying from "../assets/images/whyAreYouCrying6.png";
import ThingsWeDo from "../assets/images/thingsWeDo5.png";

const Films = () => {
  // sanity call here to fetch data

  return (
    <main id="films">
      <h2>Films I Produced</h2>

      <div className="films-showcase">
        <div className="film">
          <Link className="film-img" to="/films/2">
            <img src={ThingsWeDo} alt="" />
          </Link>
          <div className="film-info">
            <p className="film-caption">The Things We Do (2019)</p>
            <Link className="link-button" to="/films/2">
              Learn more
            </Link>
          </div>
        </div>

        <div className="horizontal-line" />

        <div className="film">
          <Link className="film-img" to="/films/1">
            <img src={WhyAreYouCrying} alt="" />
          </Link>
          <div className="film-info">
            <p className="film-caption">Why are you crying? (2019)</p>
            <Link className="link-button" to="/films/1">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Films };
