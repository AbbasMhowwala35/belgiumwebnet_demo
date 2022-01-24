import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Insta = () => {
  return (
    <div className="bj_insta">
      <Container fluid>
        <Row>
        <Col md={12} className="mb-3">
            <div className="justify-content-center text-center mt-50 mt-4">
              <h1 className="text-center text-uppercase">GET A TOUR OF OUR SOCIAL MEDIA</h1>
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/line.svg"
                class="line-black"
                alt="line-black"
              ></img>
            </div>
          </Col>
          <Col md={4} className="no-padding">
              <div class="imagesection">
                <a href="javascript:void(0);">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image"
                  ></img>
                </a>
            </div>
          </Col>
          <Col md={8}>
            <div class="elfsight-app-10a9fda0-971c-4226-881b-5a4d591d7b0b"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Insta;
