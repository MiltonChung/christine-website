import * as React from "react";
import Profile from "../assets/images/profile-pic.jfif";

const Header = () => {
  return (
    <header>
      <div className="profile-photo">
        <img src={Profile} alt="Christine profile" />
      </div>
      <div className="header-info">
        <h1>Christine Lin</h1>
        <h5>filmmaker</h5>
      </div>
    </header>
  );
};

export { Header };
