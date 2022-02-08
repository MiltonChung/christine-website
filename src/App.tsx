// import { Switch, Route } from "react-router-dom";
import sanityClient from "./lib/sanity";
import React from "react";
import { useAsync } from "./hooks/useAsync";

const App = () => {
  const { run, data: packetInfo } = useAsync();

  React.useEffect(() => {
    document.cookie = "sameSite=None; Secure";

    run(
      sanityClient.fetch(
        `*[_type == "post"] {
					_id,
				  title,
          slug
				}`
      )
    ).catch((errors: string) => {
      throw Error(errors);
    });
  }, [run]);

  return (
    <div className="App">
      <h2>hi</h2>
      {console.log(packetInfo)}
    </div>
  );
};

export default App;
