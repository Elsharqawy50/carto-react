import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import FilterProducts from "./FilterProducts";
import { useSelector } from "react-redux";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Products = () => {
  const productsData = useSelector((state) => state.products.items);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = productsData.slice(startIndex, endIndex);

  return (
    <section className="container">
      <h1 className="heading-1 text-center margin__bottom-80 mt-5 fw-bold">
        our products
      </h1>
      <FilterProducts onSearch={() => setPage(1)} />
      <Row className="mb-4">
        {displayedData.length === 0 && (
          <p className="text-center mt-5 fs-3 fw-bold">There are no products</p>
        )}
        {displayedData.length > 0 &&
          displayedData.map(
            ({ id, product_name, product_price, product_image, category }) => (
              <Col key={id} md={4}>
                <ProductCard
                  title={product_name}
                  price={product_price}
                  img={product_image}
                  category={category}
                />
              </Col>
            )
          )}
      </Row>
      <PaginationControl
        page={page}
        between={4}
        total={productsData.length}
        limit={6}
        changePage={(page) => {
          setPage(page);
        }}
        ellipsis={1}
      />
    </section>
  );
};

export default Products;
