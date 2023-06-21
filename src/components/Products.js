import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="container">
      <h1 class="heading-1 text-center margin__bottom-80 mt-5 fw-bold">our products</h1>
      <Row>
        <Col md={4}>
          <ProductCard />
        </Col>
        <Col md={4}>
          <ProductCard />
        </Col>
        <Col md={4}>
          <ProductCard />
        </Col>
      </Row>
    </section>
  );
};

export default Products;
