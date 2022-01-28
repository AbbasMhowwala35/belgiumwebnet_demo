import { Link } from "@material-ui/core";
import React from "react";
import { Col } from "react-bootstrap";

const ProductList = (props) => {
  let { title, description, image, price, category, rating, rate, count } = props;
  return (
    <Col md={3} className="trans-product">
      <div className="product-item">
        <div className="product mb-30 engoj_grid_parent relative">
          <div className="img-product relative">
            <Link className="engoj_find_img">
              <img
                src="{image}"
                className="img-responsive"
              ></img>
            </Link>
            <ul className="product-icon-action list-unstyled mb-0 text-center">
              <li className="add-to-cart mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                    alt="Cart"
                    class="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
              <li className="quick-view mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                    alt="Cart"
                    class="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
              <li className="add-wishlist mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/wishlist.svg"
                    alt="Wishlist"
                    class="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
          <h4 class="des-font capital title-product mb-0">
            <Link>{title}</Link>
            <p className="price-product mb-0">
              <s className="price-old">{price}</s>
              <span className="price">$600.00</span>
            </p>
          </h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductList;
