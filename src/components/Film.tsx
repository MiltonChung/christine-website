import * as React from "react";
import { FComponent } from "../types/common";
import { RouteComponentProps } from "react-router-dom";

type FilmProps = RouteComponentProps<{
  id: string;
}>;

const Film: FComponent<FilmProps> = ({ match }) => {
  return (
    <div>
      <h1>film {match.params.id}</h1>
    </div>
  );
};

export { Film };
