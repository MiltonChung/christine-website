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
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { PortableTextBlock } from "@portabletext/types";

export type HomeResponse = {
  _id: string;
  mainImage: SanityImage;
  aboutMe: PortableTextBlock;
};

export type FilmResponse = {
  _id: string;
  id: number;
  year: string;
  triggerWarning: string;
  title: string;
  role: string;
  mainImage: SanityImage;
  link: string;
  length: string;
  image1: SanityImage;
  image2: SanityImage;
  genre: string;
  description1: PortableTextBlock;
  description2?: PortableTextBlock;
  credits: PortableTextBlock;
};

export type FeaturedResponse = {
  _id: string;
  youtubeID: string;
  role: string;
  date: Date;
  title: string;
  order: number;
};

export type CollaborationResponse = {
  _id: string;
  id: number;
  title: string;
  mainImage: SanityImage;
  link: string;
  description: PortableTextBlock;
};

interface MatchParams {
  id: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

/*
TODO:

~ add all app state data to app to cache the result so it doesn't recall the api every time
the user reloads/switch pages
~ home page about me paragraph styling

- add error boundaries

- check for mobile views using polypane

- switch emailjs to christine on deploy

- lighthouse optimizations
*/

const App = () => {
  const [appHomeData, setAppHomeData] = React.useState<HomeResponse[]>();
  const [appFilmsData, setAppFilmsData] = React.useState<FilmResponse[]>([]);
  const [appFeatured, setAppFeatured] = React.useState<FeaturedResponse[]>([]);
  const [appCollaborationsData, setAppCollaborationsData] = React.useState<
    CollaborationResponse[]
  >([]);

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
          <Films
            appFilmsData={appFilmsData}
            setAppFilmsData={setAppFilmsData}
          />
        </Route>
        <Route
          path="/films/:id"
          component={({ match }: MatchProps) => <Film id={match.params.id} />}
        />
        <Route path="/other">
          <Other
            appCollaborationsData={appCollaborationsData}
            setAppCollaborationsData={setAppCollaborationsData}
          />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/featured">
          <Featured
            appFeaturedData={appFeatured}
            setAppFeaturedData={setAppFeatured}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
