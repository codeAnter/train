import { hot } from "react-hot-loader/root";
import React from "react";
import { Nav, Container } from "react-bootstrap";
import Battle from "../pages/Battle";
import Popular from "../pages/Popular";
import BattleResult from "../pages/BattleResult";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "Battle",
      player1: "",
      player2: "",
    };
  }

  handleMenu(key) {
    console.log("key", key);
    this.setState({
      route: key,
    });
  }

  handleBattleResult(player1, player2) {
    this.handleMenu("BattleResult");

    this.setState({
      player1,
      player2,
    });
  }

  render() {
    const menuItems = ["Popular", "Battle"];
    const { route, player1, player2 } = this.state;
    let page = null;
    switch (route) {
      case "Battle":
        page = (
          <Battle enterBattleResult={this.handleBattleResult.bind(this)} />
        );
        break;
      case "Popular":
        page = <Popular />;
        break;
      case "BattleResult":
        page = (
          <BattleResult
            player1={player1}
            player2={player2}
            onReset={() => this.handleMenu("Battle")}
          />
        );
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

export default hot(App);
