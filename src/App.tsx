import React from "react";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Other } from "./pages/Other";
import { Film } from "./components/Film";
import { Contact } from "./pages/Contact";
import { Featured } from "./pages/Featured";
import { Header } from "./components/Header";
import { SanityImage } from "./types/common";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { PortableTextBlock } from "@portabletext/types";

export type HomeResponse = {
  _id: string;
  mainImage: SanityImage;
  aboutMe: PortableTextBlock;
};

/*
TODO:

- add all app state data to app to cache the result so it doesn't recall the api every time
the user reloads/switch pages

- add error boundaries

- home page about me paragraph styling

- check for mobile views using polypane

- switch emailjs to christine on deploy

- lighthouse optimizations
*/

const App = () => {
  const [appHomeData, setAppHomeData] = React.useState<HomeResponse[]>();
  // const [appFilms, setAppFilms] = React.useState([]);
  // const [appFeatured, setAppFeatured] = React.useState([]);
  // const [appCollaborations, setAppCollaborations] = React.useState([]);

  return (
    <div className="app">
      <ScrollToTop />

      <div className="top">
        <Header />
        <Navbar />
      </div>

      <Switch>
        <Route path="/" exact>
          <Home appHomeData={appHomeData} setAppHomeData={setAppHomeData} />
        </Route>
        <Route path="/films" exact>
          <Films />
        </Route>
        <Route path="/films/:id" component={Film} />
        <Route path="/other">
          <Other />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/featured">
          <Featured />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
