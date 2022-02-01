import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../Listitems/ProductList";
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const list = []
  categories.forEach((category) => {
    list.push(<li className="categories">{category}</li>)
  })
  useEffect(() => {
    fetchMoreProduct();
    fetchCategory();
    //eslint-disable-next-line
  }, []);
  const fetchMoreProduct = async () => {
    const url = `https://fakestoreapi.com/products?limit=12`;
    setPage(page + 1);
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  };
  const fetchCategory = async () => {
    const url = `https://fakestoreapi.com/products/categories`;
    setPage(page + 1);
    axios.get(url).then((res) => {
      setCategories(res.data);
    });
  };
  return (
    <div className="bj_products">
      <div className="wrap-bread-crumb breadcrumb_collection2">
        <div className="text-center bg-breadcrumb">
          <div className="title-page">
            <h2 className="">Products</h2>
          </div>
          <div className="bread-crumb">
            <a href="/" title="Back to the frontpage">
              Home<i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <strong>Products</strong>
          </div>
        </div>
      </div>
      <Container>
        <Row className="bj_products">
        {/* <Col md={2}>
        <br></br>
        <h2>Categories</h2>
        <ul>
          {list}
          </ul>
        </Col> */}
        <Col md={12}>
        <Row>
          {products?.map((element) => (
            <div className="col-md-4">
              <ProductList
                title={element.title ? element.title:"  "}
                description={element.description ? element.description.slice(0, 88) : ""}
                image={element.image ? element.image : ""}
                price={element.price ? element.price : ""}
                id={element.id ? element.id : ""}
              />
            </div>
          ))}
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Shop;
