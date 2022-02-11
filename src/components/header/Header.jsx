import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { NavLink, Link } from "react-router-dom";
import "../../assets/css/header.css";

const header = () => {
  return (
    <Navbar className="bj_header" sticky="top">
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
            <NavLink to="/" className="top_menu">
              Yellow Gold
            </NavLink>
            <NavLink to="/shop" className="top_menu">
              White Gold
            </NavLink>
            <NavLink to="/shop" className="top_menu">
              Diamonds
            </NavLink>
            <NavDropdown title="Loose Diamonds" id="engagement-menu" className="top_menu">
              <Link to="/diamonds">Start With A Diamond</Link>
              <Link to="/ring-builder">Start With A Setting</Link>             
            </NavDropdown>
            <NavLink to="/about" className="top_menu">
              About Us
            </NavLink>
            <NavLink to="/contact" className="top_menu">
              Contact Us
            </NavLink>
            {/* <NavLink to="/login" className="top_menu">Login</NavLink> */}
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
            <img
              src="https://baladna.belgiumwebnet.com/assets/images/headerimg/search.svg"
              alt="Search"
            ></img>
          </Button>
        </Form>
        <ul className="side_ul">
          <li className="login-users menu cool_menu1 desktop_menu user_desktop">
            <Link to="/">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/user.svg"
                alt="User"
                className="top_img"
                width="20px"
              ></img>
            </Link>
          </li>
          <li className="menu cool_menu1 desktop_menu">
            <Link to="/wishlist">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/wishlist.svg"
                alt="Wishlist"
                className="top_img"
                width="20px"
              ></img>
            </Link>
          </li>
          <li className="menu cool_menu1 desktop_menu">
            <Link to="/cart">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                alt="Cart"
                className="top_img"
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
