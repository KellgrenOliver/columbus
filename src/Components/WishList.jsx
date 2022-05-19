import React from "react";
import styled from "@emotion/styled";
import { useProductContext } from "../contexts/ProductContext";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "5rem auto",
});

const Name = styled.div({
  cursor: "pointer",
  fontWeight: 400,
  "&:hover": {
    color: "red",
  },
});

const WishList = () => {
  const { wishList } = useProductContext();

  const productPrices = wishList?.map((product) => product.price);

  let sum = 0;
  for (let i = 0; i < productPrices?.length; i++) {
    sum += productPrices[i];
  }

  const deleteProductFromWishList = (product) => {
    deleteDoc(doc(db, "wishlist", `${product?.name}`));
    toast.success(`${product?.name} removed from wish list!`);
  };

  return (
    <>
      <Container>
        {wishList && <h1>Wish list</h1>}
        {wishList?.length <= 0 && <span>Your wish list is emty.</span>}
        {wishList?.map((product, i) => (
          <Name key={i} onClick={() => deleteProductFromWishList(product)}>
            {product?.name}
          </Name>
        ))}
        {wishList && <h1>Total Price: {sum} :-</h1>}
      </Container>
      <Toaster position="top-right" />
    </>
  );
};

export default WishList;
