import React, { createContext, useContext, useReducer, useState } from "react";
import { productsData } from "../../data";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const UpdatesProducts = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      const _product = { ...state[index] };
      _product.quantity++;
      UpdatesProducts[index] = _product;

      return UpdatesProducts;
    }

    case "decrement":
      const index = state.findIndex((item) => item.id === action.id);
      const _product = { ...state[index] };
      if (_product.quantity === 1) {
        const filterdProducts = state.filter((p) => p.id !== action.id);
        return filterdProducts;
      } else {
        _product.quantity--;
        const UpdatesProducts = [...state];
        UpdatesProducts[index] = _product;
        return UpdatesProducts;
      }

    case "remove":
      const filterdProducts = state.filter((p) => p.id !== action.id);
      return filterdProducts;

    case "filter":
      const filterArr = action.event;
      console.log("filterarr=", filterArr);
      if (filterArr === "") {
        return productsData;
      } else {
        const newProduct = productsData.filter((i) =>
        
          filterArr.some((m) => m.item === i.brand) &&
          filterArr.some((m) => m.item === i.size)
        );

      
        console.log("newProduct", newProduct);
        return newProduct;
      }

    case "sort":
      {
        const sortBy = action.event.value;
        console.log(sortBy);
        const allProducts = [...state];
        if (sortBy === "A") {
          const sortedProducts = allProducts.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price)
          );
          console.log("A", sortedProducts);
          return sortedProducts;
        } else if (sortBy === "D") {
          const sortedProducts = allProducts.sort(
            (a, b) => parseFloat(b.price) - parseFloat(a.price)
          );
          //console.log("D", sortedProducts);
          return sortedProducts;
        }
      }
      break;
    case "search":
      const keyWord = action.event.target.value;
      console.log(keyWord);
      if (keyWord === "") {
        //console.log(state);
        return state;
      } else {
        const result = state.filter((p) =>
          p.title.toLowerCase().includes(keyWord.toLowerCase())
        );
        return result;
      }

    //const newarr=productsData.sort((a,b)=>a.price-b.price);

    default:
      return productsData;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
