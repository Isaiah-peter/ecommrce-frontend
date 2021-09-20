import React from "react";
import styled from "styled-components";
import { popularProduct } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = () => {
  return (
    <Container>
      {" "}
      {popularProduct.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Product;
