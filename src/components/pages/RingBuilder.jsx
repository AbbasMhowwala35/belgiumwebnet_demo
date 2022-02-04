import { Link } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RingBuilder = () => {
  return (
    <div className="ring_builder">
      <Container>
        <Row>
          <Col md={4} className="bj_shape_padding">
            <div class="bj_shape_wizard_step-2">
              <img src="https://malaknew.belgiumwebnet.com/static/media/diamond.a99da6f4.svg" />
              <div class="bj_shape_wizard_content">
                <ul>
                  <li class="bj_setting_details">
                    <h2>Choose a diamond</h2>
                    <Link aria-current="page" class="active" href="/diamonds">
                      Search
                    </Link>
                  </li>
                  <li class="bj_setting_price"></li>
                  <li class="bj_shape_wizard_img">
                    <img
                      src="/static/media/diamond.a99da6f4.svg"
                      alt="empty diamond setting"
                      class=""
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="bj_shape_padding"></Col>
          <Col md={4} className="bj_shape_padding"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default RingBuilder;
