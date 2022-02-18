import { Link } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import RingBuilderStep from "../../assets/images/ringstep1.png";
import RingBuilderStep2 from "../../assets/images/ringstep2.png";
import RingBuilderStep3 from "../../assets/images/ringstep3.png";
import Diamond from "../../assets/images/diamond-1.svg";
import Setting from "../../assets/images/setting.svg";
import Csetting from "../../assets/images/complete-setting.svg";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const RingBuilder = () => {
  return (
    <div className="ring_builder">
      <Container>
        <Breadcrumbs aria-label="breadcrumb" className="bj_breadcrumb">
          <Link
            color="inherit"
            href="/"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Home
          </Link>
          <Link
            color="inherit"
            href="/getting-started/installation/"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Ring Builder
          </Link>
        </Breadcrumbs>
        <Row>
          <Col md={4} className="bj_shape_padding">
            <div className="bj_shape_wizard_step-2">
              <img src={RingBuilderStep} alt="Ring Builder Steps" />
              <div className="bj_shape_wizard_content">
                <ul>
                  <li className="bj_setting_details">
                    <h2>Choose a diamond</h2>
                    <Link aria-current="page" className="active" href="/diamonds">
                      Search
                    </Link>
                  </li>
                  <li className="bj_setting_price"></li>
                  <li className="bj_shape_wizard_img">
                    <img
                      src={Diamond}
                      alt="empty diamond setting"
                      className=""
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="bj_shape_padding">
            <div className="bj_shape_wizard_step-2">
              <img src={RingBuilderStep2} alt="Ring Builder Steps" />
              <div className="bj_shape_wizard_content">
                <ul>
                  <li className="bj_setting_details">
                    <h2>Choose a Setting</h2>
                    <Link aria-current="page" className="active" href="/diamonds">
                      Search
                    </Link>
                  </li>
                  <li className="bj_setting_price"></li>
                  <li className="bj_shape_wizard_img">
                    <img
                      src={Setting}
                      alt="empty diamond setting"
                      className=""
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} className="bj_shape_padding">
            <div className="bj_shape_wizard_step-2">
              <img src={RingBuilderStep3} alt="Ring Builder Steps" />
              <div className="bj_shape_wizard_content">
                <ul>
                  <li className="bj_setting_details">
                    <h2>Choose a Setting</h2>
                    <Link aria-current="page" className="active" href="/diamonds">
                      Search
                    </Link>
                  </li>
                  <li className="bj_setting_price"></li>
                  <li className="bj_shape_wizard_img">
                    <img
                      src={Csetting}
                      alt="empty diamond setting"
                      className=""
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RingBuilder;
