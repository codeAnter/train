import React from "react";
import { Container } from "react-bootstrap";

const Footer = (props) => (
  <div>
    <Container>{props.children}</Container>
  </div>
);

export default Footer;
