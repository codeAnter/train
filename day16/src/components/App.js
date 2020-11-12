import React from "react";
import { Nav, Container } from "react-bootstrap";
import axios from "axios";
import Battle from "../pages/Battle";
import Popular from "../pages/Popular";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Popular",
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/store/categories");
    console.log("res2", res);
  }

  handleMenu(key) {
    console.log("key", key);
    this.setState({
      route: key,
    });
  }

  render() {
    const menuItems = ["Popular", "Battle"];
    const { route } = this.state;
    let page = null;
    switch (route) {
      case "Battle":
        page = <Battle />;
        break;
      case "Popular":
        page = <Popular />;
        break;
      default:
        page = <Popular />;
    }
    return (
      <Container>
        <Nav
          variant="pills"
          onSelect={(selectedKey) => this.handleMenu(selectedKey)}
        >
          {menuItems.map((item, key) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={item}>{item}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <div>{page}</div>
      </Container>
    );
  }
}
