import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Testimonial = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div class="item">
                <img src="assets/img/1.jpg" />
              </div>
              <div class="item">
                <img src="assets/img/2.jpg" />
              </div>
              <div class="item">
                <img src="assets/img/3.jpg" />
              </div>
              <div class="item">
                <img src="assets/img/4.jpg" />
              </div>
              <div class="item">
                <img src="assets/img/5.jpg" />
              </div>
            </OwlCarousel>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
