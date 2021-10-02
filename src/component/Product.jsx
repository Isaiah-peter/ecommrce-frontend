import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://Localhost:5000/product?categories=${cat}`
            : `http://Localhost:5000/product`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjEsIklzQWRtaW4iOnRydWUsImV4cCI6MTYzMzI2NzA1Mn0.mKQkgemLt4ku--DYAubkgtZYLTumgiTxbi5mKALH_A8`,
            },
          }
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) => {
            return key === "size"
              ? item.Size.find((k) => k.name === value)
              : item.Color.find((k) => k.name === value);
          })
        )
      );
  }, [filter, cat, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.CreatedAt - b.CreatedAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts.map((item) => {
            return <ProductItem key={item.ID} item={item} />;
          })
        : products.slice(0, 8).map((item) => {
            return <ProductItem key={item.ID} item={item} />;
          })}
    </Container>
  );
};

export default Product;
