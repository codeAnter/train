import React from "react";
import { Button, Container, Row, Col, Form, Image } from "react-bootstrap";
import Footer from "@/components/Footer";
import styles from "./Battle.less";

const PlayerCard = ({ player = "http://placehold.it/48x48/", handleClear }) => (
  <Row>
    <Col xs={1}>
      <Image
        data-src="https://github.com/{player}.png?size=200"
        rounded
        style={{ backgroundColor: "gray" }}
        src="http://placehold.it/48x48"
        className="lazyload"
      />
    </Col>
    <Col xs={8}>
      <h3>{player}</h3>
    </Col>
    <Col xs={2}>
      <Button onClick={handleClear} variant="danger">
        X
      </Button>
    </Col>
  </Row>
);

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      player1Submitted: false,
      player2Submitted: false,
    };
  }

  handleChange(player, e) {
    // console.log("value", e);
    this.setState({
      [player]: e.target.value,
    });
  }

  handleClear(player) {
    // console.log("clear", player)
    const submited = `${player}Submitted`;
    this.setState({
      [player]: "",
      [submited]: false,
    });
  }

  handleSubmit(player, e) {
    e.preventDefault();
    const submited = `${player}Submitted`;
    // console.log('submited', player, submited)

    this.setState({
      [submited]: true,
    });
  }

  render() {
    const { player1, player2, player1Submitted, player2Submitted } = this.state;
    const { enterBattleResult } = this.props;

    return (
      <Container>
        <h2 className="text-center">Instructions</h2>
        <Row>
          <Col xs={4} sm={4} className="d-flex align-items-end flex-column">
            <h3 className="d-none d-sm-block">Enter two Github</h3>
            <i className={`fa fa-user ${styles.card1}`} />
          </Col>
          <Col xs={4} sm={4} className="text-center">
            <h3 className="text-center d-none d-sm-block">Battle</h3>
            <i className={`fa fa-fighter-jet ${styles.card1}`} />
          </Col>
          <Col xs={4} sm={4} className="d-flex flex-column align-items-start">
            <h3 className="d-none d-sm-block">See the winner</h3>
            <div>
              <i className={`fa fa-trophy ${styles.card1}`} />
            </div>
          </Col>
        </Row>
        <h3 className={`text-center ${styles.players}`}>Players</h3>
        <Row>
          <Col xs={12} sm={6}>
            {player1Submitted ? (
              <PlayerCard
                player={player1}
                handleClear={this.handleClear.bind(this, "player1")}
              />
            ) : (
              <Form onSubmit={(e) => this.handleSubmit("player1", e)}>
                <Form.Group>
                  <Form.Label>Player1</Form.Label>
                  <Form.Row>
                    <Col xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Player1 Name"
                        value={player1}
                        onChange={(e) => this.handleChange("player1", e)}
                      />
                      <Form.Text className="text-muted">
                        * use github name not repo name
                      </Form.Text>
                    </Col>
                    <Col xs={4}>
                      <Button
                        type="submit"
                        variant="info"
                        block
                        disabled={!player1}
                      >
                        提交
                      </Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            )}
          </Col>
          <Col xs={12} sm={6}>
            {player2Submitted ? (
              <PlayerCard
                player={player2}
                handleClear={this.handleClear.bind(this, "player2")}
              />
            ) : (
              <Form onSubmit={(e) => this.handleSubmit("player2", e)}>
                <Form.Group>
                  <Form.Label>Player2</Form.Label>
                  <Form.Row>
                    <Col xs={8}>
                      <Form.Control
                        type="text"
                        placeholder="Player2 Name"
                        value={player2}
                        onChange={(e) => this.handleChange("player2", e)}
                      />
                      <Form.Text className="text-muted">
                        * use github name not repo name
                      </Form.Text>
                    </Col>
                    <Col xs={4}>
                      <Button
                        type="submit"
                        variant="info"
                        block
                        disabled={!player2}
                      >
                        提交
                      </Button>
                    </Col>
                  </Form.Row>
                </Form.Group>
              </Form>
            )}
          </Col>
        </Row>
        {player1Submitted && player2Submitted ? (
          <Row>
            <Col className="text-center">
              <Button
                size="lg"
                onClick={() => enterBattleResult(player1, player2)}
              >
                Battle
              </Button>
            </Col>
          </Row>
        ) : null}
        <Footer>
          <div className="text-center">版权所有 &copy; liuwencan</div>
        </Footer>
      </Container>
    );
  }
}
