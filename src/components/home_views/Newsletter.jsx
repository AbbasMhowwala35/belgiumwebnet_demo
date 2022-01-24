import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const Newsletter = () => {
  return (
    <div className="bj_newsletter">
      <Container>
        <Row>
          <Col md={9} className="m-auto">
            <div className="bj_news_head text-center">
              <img
                src="https://baladna.belgiumwebnet.com/assets/images/headerimg/news.svg"
                class="instaimg"
                alt="Newsletter Svg"
              ></img>
              <h2 className="title30 text-uppercase font-italic text-white">
                Sign up to be a Baladna Jewelry Insider
              </h2>
              <Form className="newsletter_form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button className="submit_btn" type="submit">Subscribe</Button>
              </Form>
              <p className="text-white">
                By signing up you confirm that you have read the Privacy Policy
                and agree that your email will be collected and used for the
                purposes of sending news, promotions and updates via email. You
                can withdraw your consent at any time by unsubscribing.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
