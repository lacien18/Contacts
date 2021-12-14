import { Container, Navbar, Badge, Col } from "react-bootstrap";
import React from "react";

const NavBar = (props) => {
  const { nameProfile, count } = props;
  return (
    <Navbar bg="light">
      <Container>
        <Col>
          <b>WELLCOME</b>
          <p>👤 { nameProfile ?? ""}</p>
        </Col>
      </Container>

      <Navbar.Brand href="#">
        Contactos{" "}
        <Badge bg={count !== 0 ? "primary" : "secondary"}>{count}</Badge>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
