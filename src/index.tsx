import App from "./App";
import React from "react";
import "./styles/main.scss";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
