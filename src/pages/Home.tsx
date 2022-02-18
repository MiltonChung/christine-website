import * as React from "react";
import HomeLanding from "../assets/images/home_landing.png";

const Home = () => {
  return (
    <main id="home">
      <img className="home-landing" src={HomeLanding} alt="Christine Landing" />
    </main>
  );
};

export { Home };
