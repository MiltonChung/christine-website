import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
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
      <Header />
      <Navbar />
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/books">
          <Books books={books} />
        </Route>
        <Route path="/updates">
          <Updates />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home books={books} intro={intro} />
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
