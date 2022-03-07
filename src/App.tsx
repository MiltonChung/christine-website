import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Films } from "./pages/Films";
import { Film } from "./components/Film";
import { Other } from "./pages/Other";
import { Contact } from "./pages/Contact";
import { Featured } from "./pages/Featured";
import ScrollToTop from "./components/ScrollToTop";
// import sanityClient from "./lib/sanity";
// import { useAsync } from "./hooks/useAsync";

const App = () => {
  // const { run, data: packetInfo } = useAsync();

  // React.useEffect(() => {
  //   document.cookie = "sameSite=None; Secure";

  //   run(
  //     sanityClient.fetch(
  //       `*[_type == "post"] {
  // 				_id,
  // 			  title,
  //         slug
  // 			}`
  //     )
  //   ).catch((errors: string) => {
  //     throw Error(errors);
  //   });
  // }, [run]);

  return (
    <div className="app">
      <ScrollToTop />
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
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
