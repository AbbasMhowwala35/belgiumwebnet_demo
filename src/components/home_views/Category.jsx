import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Category = () => {
  return (
    <div className="category-section">
      <Container className="custom-container">
        <Row>
          <Col md={12}>
            <div className="justify-content-center text-center mt-50 mt-4">
              <h1 className="text-center text-uppercase">Explore Our Collection</h1>
              <img src="https://baladna.belgiumwebnet.com/assets/images/line.svg" className="line-black" alt="line-black"></img>
            </div>
          </Col>
          <Col md={4}>
            <div className="cat-section one-third">
              <a href="https://baladna.belgiumwebnet.com/jewelry/pendants">
                <img
                  src="https://baladna.belgiumwebnet.com/assets/images/category/pendant.png"
                  alt="Pendants"
                ></img>
              </a>
            </div>
          </Col>
          <Col md={4}>
          <div className="cat-parent">
                <div className="cat-section one-third">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/anklets">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/anklets.png" alt="Anklets"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="cat-parent">
                <div className="cat-section one-third">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/fashion-rings">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/rings.png" alt="Rings"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="cat-parent">
                <div className="cat-section one-third">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/necklaces">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/necklaces.png" alt="Necklaces"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="cat-parent">
                <div className="cat-section one-third">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/bracelets">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/bracelets.png" alt="Bracelets"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={4}>
          <div className="cat-parent">
                <div className="cat-section one-third">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/bangles">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/bangles.png" alt="Bangles"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={6}>
          <div className="cat-parent">
                <div className="cat-section one-half">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/full-set">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/full-set.png" alt="Full-Set"></img>
                    </a>
                </div>
            </div>
          </Col>
          <Col md={6}>
          <div className="cat-parent">
                <div className="cat-section one-half">
                    <a href="https://baladna.belgiumwebnet.com/jewelry/halfset">
                        <img src="https://baladna.belgiumwebnet.com/assets/images/category/halfset.png" alt="Halfset"></img>
                    </a>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
