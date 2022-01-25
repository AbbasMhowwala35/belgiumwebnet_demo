import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav } from "react-bootstrap";
const Topnav = (props) => {
  return (
    <div className="topbar-main d-none d-lg-block">
      <Container className="custom-container">
        <Row>
          <Col md={5}>
            <ul className="list-inline-block pull-left">
              <li className="email_second">
                   <Nav.Link to="/home">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/loaction_icon.svg"
                    alt="address"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>4831 N Kedzie Ave, Chicago, IL 60625</span>
                </Nav.Link>
              </li>
              <li className="tel_top">
                <Nav.Link href="tel: +17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </Nav.Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-inline-block text-center">
              <li className="tel_top">
                <Nav.Link to="tel: +17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </Nav.Link>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <ul className="list-inline-block pull-right">
              <li className="email_second">
                <Nav.Link to="/contact">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/loaction_icon.svg"
                    alt="address"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>4831 N Kedzie Ave, Chicago, IL 60625</span>
                </Nav.Link>
              </li>
              <li className="tel_top">
                <Nav.Link to="tel: +17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </Nav.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topnav;
