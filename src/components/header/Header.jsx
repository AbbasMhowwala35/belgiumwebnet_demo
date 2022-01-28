import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {NavLink, Link} from "react-router-dom";
import "../../assets/css/header.css";

const header = () => {
  return (
    <Navbar className="bj_header">
      <Container className="custom-container">
        <NavLink to="/">
          <img
            src="https://baladna.belgiumwebnet.com/assets/logo/logo2.png"
            alt="Logo"
            className="logo_img"
          ></img>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="bj_navigation justify-content-center"
        >
          <Nav>
            <NavLink to="/" className="top_menu">Yellow Gold</NavLink>
            <NavLink to="/shop" className="top_menu">White Gold</NavLink>
            <NavLink to="/shop" className="top_menu">Diamonds</NavLink>
            <NavLink to="/shop" className="top_menu">Loose Diamonds</NavLink>
            <NavLink to="/about" className="top_menu">About Us</NavLink>
            <NavLink to="/contact" className="top_menu">Contact Us</NavLink>
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
            <img src="https://baladna.belgiumwebnet.com/assets/images/headerimg/search.svg" alt="Search"></img>
          </Button>
        </Form>
        <ul className="side_ul">
          <li class="login-users menu cool_menu1 desktop_menu user_desktop">
          <Link to="/">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/user.svg"
                alt="User"
                class="top_img"
                width="20px"
              ></img>
            </Link>
          </li>
          <li class="menu cool_menu1 desktop_menu">
          <Link to="/wishlist">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/wishlist.svg"
                alt="Wishlist"
                class="top_img"
                width="20px"
              ></img>
              </Link>
          </li>
          <li class="menu cool_menu1 desktop_menu">
          <Link to="/cart">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                alt="Cart"
                class="top_img"
                width="20px"
              ></img>
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default header;
