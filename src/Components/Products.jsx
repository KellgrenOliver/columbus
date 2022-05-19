import styled from "@emotion/styled";
import React from "react";
import { useProductContext } from "../contexts/ProductContext";
import Product from "./Product";

const ProductWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "2rem",
  width: "85vw",
  margin: "2rem auto",
  "@media screen and (min-width: 500px)": {
    width: "70vw",
  },
  "@media screen and (min-width: 1024px)": {
    width: "70vw",
  },
});

const Products = () => {
  const { products } = useProductContext();
  return (
    <ProductWrapper>
      {products?.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </ProductWrapper>
  );
};

export default Products;
