import React from "react";
import { Card } from "react-bootstrap";

export default ({
  type = "Loser",
  img = "http://placehold.it/200x200",
  title = "Github",
  stars = 100,
  location = "United State",
}) => (
  <Card border="success" style={{ marginTop: "8px", marginBottom: "8px" }}>
    <Card.Header className="text-center">{type}</Card.Header>
    <Card.Body>
      <Card.Img src={img} />
      <Card.Title className="text-center">
        Scores:
        {stars}
      </Card.Title>
      <Card.Title className="text-center text-primary">
        <h3>{title}</h3>
      </Card.Title>
      <Card.Text>
        <i className="fa fa-location-arrow fa-lg fa-fw" />
        {location}
      </Card.Text>
      <Card.Text>
        <i className="fa fa-code fa-lg fa-fw" />
        {stars}
      </Card.Text>
    </Card.Body>
  </Card>
);
