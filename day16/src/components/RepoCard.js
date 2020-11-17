import React from "react";
import { Card } from "react-bootstrap";

const RepoCard = ({ no, img, url, title, author, stars, forks, issues }) => (
  <Card border="success" style={{ marginTop: "8px", marginBottom: "8px" }}>
    <Card.Header className="text-center">{no}</Card.Header>
    <Card.Body>
      <Card.Img src="images/image.png" data-src={img} className="lazyload" />
      <Card.Title className="text-center">
        <Card.Link href={url} target="_blank">
          {title}
        </Card.Link>
      </Card.Title>
      <Card.Text>
        <i className="fa fa-user fa-lg fa-fw" style={{ color: "orange" }} />
        {author}
      </Card.Text>
      <Card.Text>
        <i className="fa fa-star fa-lg fa-fw" style={{ color: "yellow" }} />
        {stars}
      </Card.Text>
      <Card.Text>
        <i
          className="fa fa-code-fork fa-lg fa-fw"
          style={{ color: "lightblue" }}
        />
        {forks}
      </Card.Text>
      <Card.Text>
        <i className="fa fa-warning fa-lg fa-fw" style={{ color: "purple" }} />
        {issues}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default RepoCard;
