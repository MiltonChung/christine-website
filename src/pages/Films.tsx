import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/icons/right-arrow.svg";
import ThingsWeDo from "../assets/images/thingsWeDo5.png";
import WhyAreYouCrying from "../assets/images/whyAreYouCrying3.png";

const Films = () => {
  // sanity call here to fetch data

  return (
    <main id="films">
      <h2>Films I Produced</h2>

      <div className="films-showcase">
        <div className="film">
          <Link className="film-img" to="/films/1">
            <img src={WhyAreYouCrying} alt="" />
          </Link>
          <div className="film-info">
            <Link className="film-caption" to="/films/1">
              Why are you crying? <span>(2019)</span>
            </Link>
            <Link to="/films/1">
              <RightArrow />
            </Link>
          </div>
        </div>
        <div className="film">
          <Link className="film-img" to="/films/2">
            <img src={ThingsWeDo} alt="" />
          </Link>
          <div className="film-info">
            <Link className="film-caption" to="/films/2">
              The Things We Do <span>(2019)</span>
            </Link>
            <Link to="/films/2">
              <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Films };
