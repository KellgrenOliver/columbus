import styled from "@emotion/styled";
import React from "react";
import Products from "../Components/Products";
import WishList from "../Components/WishList";

const Header = styled.h1({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const HomePage = () => {
  return (
    <>
      <Header>Fruit list</Header>
      <Products />
      <WishList />
    </>
  );
};

export default HomePage;
