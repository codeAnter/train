import React from "react";
import axios from "axios";
import "lazysizes";
import "qs";
import * as ReactBootstrap from "react-bootstrap";

const { Spinner } = ReactBootstrap;
const { Alert } = ReactBootstrap;
const { Container } = ReactBootstrap;
const { Nav } = ReactBootstrap;
const { Card } = ReactBootstrap;
const { Row } = ReactBootstrap;
const { Col } = ReactBootstrap;
const { Button } = ReactBootstrap;

function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return null;
  // console.log('Query variable %s not found', variable);
}

console.log(`lanuage is : ${getQueryVariable("language")}`);
const Header = (props) => {
  const menuItems = ["All", "Javascript", "Ruby", "Java", "Css", "Python"];

  return (
    <div>
      <div>Have a test</div>
      <Container>
        <Nav
          className="justify-content-center"
          variant="pills"
          activeKey={props.activeKey || "All"}
          onSelect={(selectedKey) => props.onClick(selectedKey)}
        >
          {menuItems.map((item, key) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={item}>{item}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

const Content = (props) => (
  <div>
    <Container>{props.children}</Container>
  </div>
);

const Footer = (props) => (
  <div>
    <Container>{props.children}</Container>
  </div>
);

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

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    const cards = [];
    this.state = {
      cards,
      loading: false,
      error: null,
      type: "all",
      page: 1,
    };
  }

  componentDidMount() {
    const lang = getQueryVariable("language");
    this.handleNavClick(lang);
    //  this.setState({lang})
    window.addEventListener("popstate", this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState);
  }

  handleNavClick = async (type = "all", page = 1, pushState = true) => {
    const { cards } = this.state;
    console.log("type", type);
    let url = "";
    switch (type) {
      case "Javascript":
        url =
          "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories";
        break;
      case "Ruby":
        url =
          "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories";
        break;
      case "Java":
        url =
          "https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories";
        break;
      case "Css":
        url =
          "https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories";
        break;
      default:
        url =
          "/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
    }
    url = `${url}&page=${page}&per_page=10`;
    try {
      const beforeState = {
        type,
        loading: true,
        error: null,
        lang: type,
      };
      if (page === 1) {
        beforeState.cards = [];
      }
      if (pushState) {
        window.history.pushState("", "", `?language=${type}`);
      }
      // window.location.search = `?language=${type}`
      this.setState(beforeState);
      const res = await axios.get(url, {});
      console.log("res", res.data);
      const newCards = res.data.items.map((item, key) => ({
        no: `#${page === 1 ? 1 + key : cards.length + 1 + key}`,
        img: item.owner.avatar_url,
        title: item.full_name,
        author: item.owner.login,
        stars: item.stargazers_count,
        forks: item.forks,
        issues: item.open_issues,
        url: item.html_url,
      }));
      if (page > 1) {
        this.setState((state) => ({
          cards: [...state.cards, ...newCards],
          loading: false,
          page,
        }));
      } else {
        this.setState({ cards: newCards, loading: false, page });
      }
    } catch (e) {
      this.setState({ loading: false, error: e });
    }
  };

  loadMore = () => {
    const { type, page } = this.state;
    this.handleNavClick(type, page + 1);
  };

  handlePopState = (params) => {
    const lang = getQueryVariable("language");
    this.handleNavClick(lang, this.state.page, false);
    console.log("lang", lang);
    console.log("params", params);
  };

  render() {
    const { cards, loading, error, lang } = this.state;
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div className="container">
          <Header onClick={this.handleNavClick} activeKey={lang} />
          <Content>
            <Row className="justify-content-around">
              {cards.map((item, key) => (
                <Col sm={6} md={4} lg={3} key={key}>
                  <RepoCard
                    no={item.no}
                    img={item.img}
                    title={item.title}
                    author={item.author}
                    stars={item.stars}
                    forks={item.forks}
                    issues={item.issues}
                    url={item.url}
                  />
                </Col>
              ))}
            </Row>
            <div className="text-center">
              {error && (
                <Alert variant="danger">
                  {error.response.status}
                  {error.response.statusText}
                </Alert>
              )}
            </div>
            <div className="text-center">
              <Button onClick={this.loadMore} disabled={loading}>
                {" "}
                {loading && (
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                {" "}
                加载更多
              </Button>
            </div>
          </Content>
          <Footer>
            <div className="text-center">版权所有 &copy; liuwencan</div>
          </Footer>
        </div>
      </div>
    );
  }
}
