import * as React from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { FComponent } from "../types/common";

type ScrollToTopProps = {
  history: History;
};

const ScrollToTop: FComponent<ScrollToTopProps> = ({ history }): null => {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      document.body.scrollTop = 0;
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
