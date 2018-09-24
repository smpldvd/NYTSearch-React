import React from "react";
import { Jumbotron } from "reactstrap";

const Title = ({ children }) => (
  <Jumbotron
    style={{
      height: 300,
      clear: "both",
      paddingTop: 120,
      textAlign: "center"
    }}
  >
    {children}
  </Jumbotron>
);

export default Title;
