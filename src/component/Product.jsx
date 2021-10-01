import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProduct } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {}, [cat]);

  return (
    <Container>
      {popularProduct.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Product;
