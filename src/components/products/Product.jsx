import React from "react";

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "@emotion/styled";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  
  display: flex;

  justify-content: space-evenly;

  cursor: pointer;
  ${'' /* border: 1px solid red; */}
  transiton: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  
  margin-top:5px
  height: 350px;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;

  &:hover {Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  position: absolute;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 100px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
