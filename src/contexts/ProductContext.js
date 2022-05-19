import React, { createContext, useContext } from "react";
import { db } from "../firebase";
import { collection, query } from "firebase/firestore";
import { useFirestoreQueryData } from "@react-query-firebase/firestore";

export const ProductContext = createContext();

const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductContextProvider = (props) => {
  const productsRef = query(collection(db, "products"));

  let { data: products } = useFirestoreQueryData(["products"], productsRef, {
    subscribe: true,
  });

  const wishListRef = query(collection(db, "wishlist"));

  let { data: wishList } = useFirestoreQueryData(["wishlist"], wishListRef, {
    subscribe: true,
  });

  const values = {
    products,
    wishList,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { useProductContext, ProductContextProvider as default };
