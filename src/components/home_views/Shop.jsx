import React, { useEffect, useState } from "react";
import { Link } from "@material-ui/core";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../Listitems/ProductList";


 
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchMoreData();
        //eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {        
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
    } 
  return (
    <div className="bj_products">
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
        <Row className="bj_products">
        {products.map((element)=>
          <Col md={12} className="product-head" key={element.url}>
          <ProductList title={element.title?element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage?element.urlToImage: ""} 
                        url={element.url?element.url: ""} author={element.author?element.author: ""} date={element.publishedAt?element.publishedAt: ""} source={element.source.name} />   
          </Col>
          )} 
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
