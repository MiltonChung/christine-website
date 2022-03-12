import * as React from "react";
import { PortableTextComponents } from "@portabletext/react";

export const customPortableTextComponent: PortableTextComponents = {
  block: {
    normal: (props) => <p className="home-section__body">{props.children}</p>,
  },
};
