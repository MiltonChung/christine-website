import * as React from "react";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Other } from "./pages/Other";
import { Film } from "./components/Film";
import { Contact } from "./pages/Contact";
import { Featured } from "./pages/Featured";
import { Header } from "./components/Header";
import { SanityImage } from "./types/common";
import { Navbar } from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { ErrorBoundary } from "react-error-boundary";
import { PortableTextBlock } from "@portabletext/types";
import { ErrorFallback } from "./components/ErrorFallback";
import { Switch, Route, RouteComponentProps, Redirect } from "react-router-dom";

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

interface MatchProps
  extends RouteComponentProps<{
    id: string;
  }> {}

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

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setAppHomeData([]);
          setAppFilmsData([]);
          setAppFeatured([]);
          setAppCollaborationsData([]);
        }}
      >
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
          <Redirect to="/" />
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default App;
