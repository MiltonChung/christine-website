import * as React from "react";
import { Link } from "react-router-dom";
import Profile from "../assets/images/profile-pic.jfif";

const Header = () => {
  return (
    <header>
      <img className="profile-photo" src={Profile} alt="Christine profile" />
      <Link className="header-info" to="/">
        <h1>Christine Lin</h1>
        <h5>filmmaker</h5>
      </Link>
    </header>
  );
};

export { Header };
