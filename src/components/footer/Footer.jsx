import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bj_footer">
      <Container className="custom-container">
        <Row>
          <div className="custom-cols one-half">
            <div className="block-footer3">
              <h2 className="title20 foot-w dark font-italic">Jewelry</h2>
              <ul className="list-none contact-foter2">
                <li>
                  <a href="javascript:void(0);" className="dark">
                    Yellow Gold
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dark ">
                    White Gold
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" className="dark ">
                    Diamonds
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="custom-cols one-half">
            <div className="block-footer3">
              <h2 className="title20 foot-w dark font-italic">
                Baladna Advantage
              </h2>
              <ul className="list-none contact-foter2">
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/create-custom"
                    className="dark"
                  >
                    Custom Jewelry
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="javascript:void(0);" className="dark ">
                    Old Gold Exchange
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="custom-cols one-half">
            <div className="block-footer3">
              <h2 className="title20 foot-w dark font-italic">
                Customer Service
              </h2>
              <ul className="list-none contact-foter2">
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/return-policy"
                    className="dark"
                  >
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="custom-cols one-half tab-about">
            <div className="block-footer3">
              <h2 className="title20 foot-w dark font-italic">About Us</h2>
              <ul className="list-none contact-foter2">
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/about"
                    className="dark"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/blog"
                    className="dark"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="custom-cols one-half">
            <div className="block-footer3">
              <h2 className="title20 foot-w dark font-italic">Contact</h2>
              <ul className="list-none contact-foter2">
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/contact"
                    className="dark"
                  >
                    4831 N Kedzie Ave, Chicago, IL 60625
                  </a>
                  <br></br>
                  <a href="tel: +17735092700" className="dark">
                    Phone: (773) 509-2700
                  </a>
                </li>
                <br></br>
                <li className="d-none d-sm-block d-md-none">
                  <a href="tel: +18774718005" className="dark">
                    Phone: (877) 471-8005
                  </a>
                </li>
                <br></br>
                <li>
                  <a
                    href="https://baladna.belgiumwebnet.com/contact"
                    className="dark "
                  >
                    4350 Touhy Ave, Lincolnwood, IL 60712
                  </a>
                  <br></br>
                  <a href="tel: +18476764700" className="dark">
                    Phone: (847) 676-4700
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Row>
        <Row className="footerrow">
          <Col md={4}>
            <div className="social">
              <ul className="social-media">
                <li>
                  <a
                    href="https://www.facebook.com/BaladnaJewelry1/"
                    target="_blank"
                  >
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/headerimg/fb.svg"
                      className="social-icon"
                      alt="Facebook"
                    ></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/baladnajewelry"
                    target="_blank"
                  >
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/headerimg/insta.svg"
                      className="social-icon"
                      alt="Insta"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/baladnajewelry" target="_blank">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/headerimg/twitter.svg"
                      className="social-icon"
                      alt="Twitter"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <h5>
                <a href="javascript:void(0);">Copyright Baldna © 2022</a>
              </h5>
              <ul className="links-ul">
                <li>
                  <a href="https://baladna.belgiumwebnet.com/privacy-policy">
                    Privacy policy |
                  </a>
                </li>
                <li>
                  <a href="https://baladna.belgiumwebnet.com/terms-and-conditions">
                    Terms &amp; Condition |
                  </a>
                </li>
                <li>
                  <a href="https://baladna.belgiumwebnet.com/shipping-returns">
                    Shipping &amp; Returns
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="certificate">
              <ul className="certificate-ul">
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/certificate/secure.png"
                      className="certificate-image"
                      alt="Certificate"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/certificate/best-seller.png"
                      className="certificate-image"
                      alt="Certificate"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/certificate/free-shipping.png"
                      className="certificate-image"
                      alt="Certificate"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/certificate/guality.png"
                      className="certificate-image"
                      alt="Certificate"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-bar">
              <p>
                All Rights Reserved. Designed and Developed by:{" "}
                <a href="http://belgiumwebnet.com/" target="_blank">
                  Belgium Webnet
                </a>
              </p>
            </div>
          </Col>
          <Col md={4} className="float-right">
            <div className="certificate">
              <ul className="certificate-ul text-right">
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/payment/visa.svg"
                      className="payment-image"
                      alt="Payment"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/payment/master_card.svg"
                      className="payment-image"
                      alt="Payment"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/payment/paypal.svg"
                      className="payment-image"
                      alt="Payment"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img
                      src="https://baladna.belgiumwebnet.com/assets/images/payment/american_express.svg"
                      className="payment-image"
                      alt="Payment"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
