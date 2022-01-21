import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../../assets/header.css";

const header = () => {
  return (
    <Navbar className="bj_header">
      <Container className="custom-container">
        <Navbar.Brand href="https://baladna.belgiumwebnet.com">
            <img
              src="https://baladna.belgiumwebnet.com/assets/logo/logo2.png"
              alt="Logo"
              className="logo_img"
            ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="bj_navigation">
          <Nav>
            <Nav.Link href="#home">Yellow Gold</Nav.Link>
            <Nav.Link href="#link">White Gold</Nav.Link>
            <Nav.Link href="#link">Diamonds</Nav.Link>
            <Nav.Link href="#link">Loose Diamonds</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
