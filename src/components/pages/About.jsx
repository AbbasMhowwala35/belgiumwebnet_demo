import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const About = () => {
  return (
    <div className="bj_about_page">
      <div className="wrap-bread-crumb breadcrumb_collection2">
        <div className="text-center bg-breadcrumb">
          <div className="title-page">
            <h2 className="">About us</h2>
          </div>
          <div className="bread-crumb">
            <a href="/" title="Back to the frontpage">
              Home<i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>

            <strong>About us</strong>
          </div>
        </div>
      </div>
      <Container className="custom-container">
        <Row className="aboutus-pages">
          <Col md={6} className="intro_image">
            <img
              class="w-100"
              src=" //cdn.shopify.com/s/files/1/0474/3168/0162/files/people1.jpg?v=1598951812"
              alt="About"
            ></img>
          </Col>
          <Col md={6} className="intro_detail d-flex align-items-center">
            <div class="info-intro">
              <p class="des_intro">Photographer</p>
              <h3 class="title_intro">Justin Lisiakir</h3>
              <p class="content_intro">
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be
                brave and grab life as the extraordinary adventure it is. So we
                make sure everyone has an equal chance to discover all the
                amazing things they’re capable of – no matter who they are,
                where they’re from or what looks they like to boss. We exist to
                give you the confidence to be whoever you want to be.
              </p>
            </div>
          </Col>
          {/* //Section 2 */}
          <Col md={6} className="intro_detail d-flex align-items-center">
            <div class="info-intro">
              <p class="des_intro">Marketing Staff</p>
              <h3 class="title_intro">Angelika Hessas</h3>

              <p class="content_intro">
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be
                brave and grab life as the extraordinary adventure it is. So we
                make sure everyone has an equal chance to discover all the
                amazing things they’re capable of – no matter who they are,
                where they’re from or what looks they like to boss. We exist to
                give you the confidence to be whoever you want to be.
              </p>
            </div>
          </Col>
          <Col md={6} className="intro_image">
            <img
              class="w-100"
              src="//cdn.shopify.com/s/files/1/0474/3168/0162/files/people4.jpg?v=1598951812 "
              alt="About"
            ></img>
          </Col>
        </Row>
      </Container>
      <div className="about-servicebox">
        <Container>
          <Row>
            <Col md={4} className="box-service justify-content-center">
              <h4 class="title">24/7 FRIENDLY SUPPORT</h4>
              <p class="content">
                Our support team always ready for you to 7 days a week
              </p>
            </Col>
            <Col md={4} className="box-service justify-content-center">
              <h4 class="title">7 DAYS EASY RETURN</h4>
              <p class="content">
                Product any fault within 7 days for an immediately exchange.
              </p>
            </Col>
            <Col md={4} className="box-service justify-content-center">
              <h4 class="title">QUALITY GUARANTEED</h4>
              <p class="content">
                If your product aren't perfect, return them for a full refund
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bj_insta">
      <Container fluid>
        <Row>
        <Col md={12} className="mb-3">
            <div className="justify-content-center text-center mt-50 mt-4">
              <h1 className="text-center text-uppercase">GET A TOUR OF OUR SOCIAL MEDIA</h1>
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/line.svg"
                className="line-black"
                alt="line-black"
              ></img>
            </div>
          </Col>
          <Col md={4} className="no-padding">
              <div className="imagesection">
                <a href="javascript:void(0);">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image"
                  ></img>
                </a>
            </div>
          </Col>
          <Col md={8}>
          <Row>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
              <Col md={4} className="no-padding">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/insta.png"
                    alt="Instagram Image" className="insta-child"
                  ></img>
              </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default About;
