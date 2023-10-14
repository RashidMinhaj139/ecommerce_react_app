import React from "react";
import { popularProducts } from "../../data";
import Product from "./Product";
import styled from "@emotion/styled";

const Container = styled.div`
 ${'' /* border: 1px solid black; */}
  background-color: light-pink;
  ${'' /* margin-top: 20px; */}
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
