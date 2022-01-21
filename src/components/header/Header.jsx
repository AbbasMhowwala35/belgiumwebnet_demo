import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bj_navigation justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home">Yellow Gold</Nav.Link>
            <Nav.Link href="#link">White Gold</Nav.Link>
            <Nav.Link href="#link">Diamonds</Nav.Link>
            <Nav.Link href="#link">Loose Diamonds</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex search-form">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">
            <img src="https://baladna.belgiumwebnet.com/assets/images/headerimg/search.svg"></img>
          </Button>
        </Form>
        <ul className="side_ul">
          <li class="login-users menu cool_menu1 desktop_menu user_desktop">
            <a
              href="https://baladna.belgiumwebnet.com/login"
              class="title12 white link-account"
            >
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/user.svg"
                alt="User"
                class="top_img"
                width="20px"
              ></img>
            </a>
          </li>{" "}
          <li class="menu cool_menu1 desktop_menu">
            <a href="https://baladna.belgiumwebnet.com/wishlist">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/wishlist.svg"
                alt="Wishlist"
                class="top_img"
                width="20px"
              ></img>
            </a>
          </li>
          <li class="menu cool_menu1 desktop_menu">
            <a href="https://baladna.belgiumwebnet.com/shopping/cart">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                alt="Cart"
                class="top_img"
                width="20px"
              ></img>
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default header;
