import { Link } from "@material-ui/core";
import React from "react";
import Image from 'react-bootstrap/Image'
const ProductList = (props) => {
  let { title, description, image, price, id } = props;
  return (
    <div className="trans-product relative">
      <div className="product-item">
        <div className="product mb-30 engoj_grid_parent">
          <div className="img-product relative">
            <Link className="engoj_find_img">
              <Image src={image} fluid className="product-image"></Image>
            </Link>
            <ul className="product-icon-action list-unstyled mb-0 text-center">
              <li className="add-to-cart mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                    alt="Cart"
                    className="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
              <li className="quick-view mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/cart.svg"
                    alt="Cart"
                    className="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
              <li className="add-wishlist mr-0">
                <Link className="box-shadow">
                  <img
                    src="https://baladna.belgiumwebnet.com/assets/images/headerimg/wishlist.svg"
                    alt="Wishlist"
                    className="top_img"
                    width="20px"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
          <h4 className="des-font capital title-product mb-0">
            <Link>{title}</Link>
            <p className="d-none">{id}</p>
            <p className="price-product mb-0">
              <span className="price">{price}</span>
                <s>{description}</s>
            </p>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
