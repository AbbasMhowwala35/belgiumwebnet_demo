import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Topnav = () => {
  return (
    <div className="topbar-main">
      <Container className="custom-container">
        <Row>
          <Col md={5}>
            <ul className="list-inline-block pull-left">
              <li className="email_second">
                <a href="https://baladna.belgiumwebnet.com/contact">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/loaction_icon.svg"
                    alt="address"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>4831 N Kedzie Ave, Chicago, IL 60625</span>
                </a>
              </li>
              <li className="tel_top">
                <a href="tel:+17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className="list-inline-block text-center">
              <li className="tel_top">
                <a href="tel:+17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={5}>
            <ul className="list-inline-block pull-right">
              <li className="email_second">
                <a href="https://baladna.belgiumwebnet.com/contact">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/loaction_icon.svg"
                    alt="address"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>4831 N Kedzie Ave, Chicago, IL 60625</span>
                </a>
              </li>
              <li className="tel_top">
                <a href="tel:+17735092700">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  <span>(773) 509-2700</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topnav;
