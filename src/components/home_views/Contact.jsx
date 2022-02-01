import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Iframe from "react-iframe";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div className="bj_contact">
      <div className="wrap-bread-crumb breadcrumb_collection2">
        <div className="text-center bg-breadcrumb">
          <div className="title-page">
            <h2 className="">Contact us</h2>
          </div>
          <div className="bread-crumb">
            <a href="/" title="Back to the frontpage">
              Home<i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <strong>Contact us</strong>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={12} className="bj_map clearfix">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!4v1643349301850!6m8!1m7!1sYTHlp87DEA6iOPPnYy8Zhw!2m2!1d40.75713341019492!2d-73.97968993909187!3f211.59283!4f0!5f0.7820865974627469"
              width="100%"
              height="450px"
              id="myId"
              className="mapIframe"
              display="initial"
              position="relative"
            />
          </Col>
        </Row>
        <Row className="bj_info2">
          <Col md={6} className="bj_contact">
            <div className="bj_contact_content">
              <h3>Get In Touch With Us</h3>
              <p>
                Donec sed odio dui. Fusce dapibus, tellus ac cursuscommodo,
                tortor mauris condimentum nibh, ut fermentum massa justo.
              </p>
            </div>
            <div className="bj_contact_form">
              <Form className="bj_contact_form">
                <Row>
                  <Col xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Fullname"
                      variant="outlined"
                      className="w-100 mb-3"
                    />
                  </Col>
                  <Col xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                      className="w-100 mb-3"
                    />
                  </Col>
                  <Col xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      type="number"
                      className="w-100 mb-3"
                    />
                  </Col>
                  <Col xs={12}>
                    <Button variant="outlined" className="mt-2">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          <Col md={6} className="bj_info">
            <div className="box_find">
              <h3>Find Our Office</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Cras mattis consectetur purus sit amet fermentum. Sed
                posuere est at lobortis.
              </p>
              <div className="info_find">
                <p>
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  Call us on (877) 471-8005
                </p>
                <p>
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/call.svg"
                    alt="Phone Call"
                    className="top_img"
                    width="20px"
                  ></img>
                  Fax : (877) 471-8005
                </p>
                <p>
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/loaction_icon.svg"
                    alt="address"
                    className="top_img"
                    width="20px"
                  ></img>
                  Address : 4350 W Touhy Ave, Lincolnwood, IL 60712
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
