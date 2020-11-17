import React from "react";
import { Container, Nav } from "react-bootstrap";

const Header = (props) => {
  const menuItems = ["All", "Javascript", "Ruby", "Java", "Css", "Python"];

  return (
    <div>
      <div>Havsdsdddss2</div>
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
export default Header;
