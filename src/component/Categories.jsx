import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItems key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
