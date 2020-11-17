import React from "react";
import axios from "axios";
import { Container, Button, Row, Col } from "react-bootstrap";
import BattleResultCard from "@/components/BattleResultCard";

export default class BattleResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      player1Data: {},
      player2Data: {},
    };
  }

  async componentDidMount() {
    console.log("mounted");
    const { player1, player2 } = this.props;
    if (player1 !== this.state.player1) {
      const res1 = await axios.get(`https://api.github.com/users/${player1}`);
      console.log("res1", res1);
      this.setState({
        player1,
        player1Data: res1.data,
      });
    }

    if (player2 !== this.state.player2) {
      const res2 = await axios.get(`https://api.github.com/users/${player2}`);
      console.log("res2", res2);
      this.setState({
        player2,
        player2Data: res2.data,
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log("data", nextProps);
    if (nextProps.player1 !== this.state.player1) {
      return true;
    }
    return true;
  }

  render() {
    const { player1, player2, onReset } = this.props;
    const { player1Data, player2Data } = this.state;
    let player1Type = "tie";
    let player2Type = "tie;";
    if (player1Data.public_repos > player2Data.public_repos) {
      player1Type = "Winner";
      player2Type = "Loser";
    } else if (player1Data.public_repos < player2Data.public_repos) {
      player1Type = "Loser";
      player2Type = "Loser";
    }
    console.log("render:", player1, player2);
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                <BattleResultCard
                  type={player1Type}
                  title={player1}
                  img={player1Data.avatar_url}
                  stars={player1Data.public_repos}
                  location={player1Data.location}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
                <BattleResultCard
                  type={player2Type}
                  title={player2}
                  img={player1Data.avatar_url}
                  stars={player2Data.public_repos}
                  location={player2Data.location}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="text-center">
          <Button onClick={onReset}>RESET</Button>
        </div>
      </Container>
    );
  }
}
