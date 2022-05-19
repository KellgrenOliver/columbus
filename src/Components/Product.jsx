import React, { useState } from "react";
import styled from "@emotion/styled";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { useProductContext } from "../contexts/ProductContext";
import Button from "./Button";

const ProductCard = styled.div({
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  width: "85vw",
  border: "1px solid #ababab",
  borderRadius: "3px",
  "@media screen and (min-width: 600px)": {
    width: "30vw",
  },
  "@media screen and (min-width: 1024px)": {
    width: "20vw",
  },
});

const Content = styled.div({
  padding: "1rem",
});

const Img = styled.img({
  width: "85vw",
  height: "30vh",
  objectFit: "cover",
  "@media screen and (min-width: 600px)": {
    width: "30vw",
  },
  "@media screen and (min-width: 1024px)": {
    width: "20vw",
  },
});

const Name = styled.div({
  fontWeight: 400,
  fontSize: "1.5rem",
  marginBottom: "1rem",
});

const Description = styled.div({
  paddingLeft: "1rem",
  paddingRight: "1rem",
});

const Information = styled.div({
  marginTop: "1rem",
  display: "flex",
  gap: "0.5rem",
  cursor: "pointer",
});

const PriceWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  marginTop: "2rem",
  gap: "0.5rem",
});

const Price = styled.div({
  fontWeight: 400,
  fontSize: "1.5rem",
  textDecoration: "line-through",
});

const Discount = styled(Price)({
  color: "red",
  textDecoration: "none",
});

const Arrow = styled.div(({ showInfo }) => {
  return {
    transform: showInfo ? "rotate(0.75turn)" : "rotate(0.25turn)",
  };
});

const WhiteSpace = styled.div({
  color: "white",
});

const SmallInfo = styled.span({
  fontSize: "0.8rem",
});

const Product = ({ product }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { wishList } = useProductContext();
  const wishListNames = wishList?.map((product) => product.name);
  const addToWishList = (product) => {
    const docData = {
      name: product?.name,
      price: product?.discount
        ? product?.price - product?.discount
        : product?.price,
    };
    setDoc(doc(db, "wishlist", `${product?.name}`), docData);

    if (wishListNames?.includes(product?.name)) {
      toast.error(`${product?.name} already exits in wish list!`);
    } else {
      toast.success(`${product?.name} added to wish list!`);
    }
  };

  return (
    <>
      <ProductCard>
        <Img src={product?.image} alt="product" />
        <Content>
          <Name>{product?.name}</Name>
          <Description>{product?.description}</Description>
          <Information onClick={() => setShowInfo(!showInfo)}>
            <Arrow showInfo={showInfo}>&gt;</Arrow>
            See information
          </Information>
          <>
            {showInfo ? (
              <>
                <li>
                  <SmallInfo>From: {product?.country}</SmallInfo>
                </li>
                <li>
                  <SmallInfo>
                    Kernels: {`${product?.kernels === true ? "Yes" : "No"}`}
                  </SmallInfo>
                </li>
              </>
            ) : (
              <>
                <WhiteSpace>.</WhiteSpace>
                <WhiteSpace>.</WhiteSpace>
              </>
            )}
          </>
          <PriceWrapper>
            {product?.discount && (
              <Discount>{product?.price - product?.discount} :-</Discount>
            )}
            {product?.discount ? (
              <Price
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "black",
                  color: "gray",
                  fontSize: "1.2rem",
                }}
              >
                {product?.discount}
              </Price>
            ) : (
              <Price style={{ textDecoration: "none" }}>
                {product?.price} :-
              </Price>
            )}
          </PriceWrapper>
          <Button
            onClick={() => addToWishList(product)}
            title={"Add to list"}
          />
        </Content>
      </ProductCard>
      <Toaster position="top-right" />
    </>
  );
};

export default Product;
