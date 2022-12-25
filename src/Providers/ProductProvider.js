import React, { createContext, useContext, useReducer, useState } from "react";
import { productsData } from "../data";

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
      console.log(filterArr);
      if (filterArr.length === 0) {
        return productsData;
      } else {
        let checkExistKey = (key) =>
          filterArr.some((i) => Object.keys(i).includes(key));
        const newProduct = productsData.filter((product) => {
          let keep = true;
          if (checkExistKey("brand") && checkExistKey("size")) {
            if (filterArr.some((item) => item.price > 0)) {
              keep =
                filterArr.some((item) => item.brand === product.brand) &&
                filterArr.some((item) => item.size === product.size) &&
                filterArr.some((item) => item.price >= parseInt(product.price));
            } else {
              keep =
                filterArr.some((item) => item.brand === product.brand) &&
                filterArr.some((item) => item.size === product.size);
            }
          } else if (checkExistKey("brand") || checkExistKey("size")) {
            if (checkExistKey("size")) {
              if (filterArr.some((item) => item.price > 0))
                keep =
                  filterArr.some((item) => item.size === product.size) &&
                  filterArr.some(
                    (item) => item.price >= parseInt(product.price)
                  );
              else keep = filterArr.some((item) => item.size === product.size);
            }

            if (checkExistKey("brand")) {
              if (filterArr.some((item) => item.price > 0))
                keep =
                  filterArr.some((item) => item.brand === product.brand) &&
                  filterArr.some(
                    (item) => item.price >= parseInt(product.price)
                  );
              else
                keep = filterArr.some((item) => item.brand === product.brand);
            }
          } else if (!checkExistKey("brand") && !checkExistKey("size")) {
            if (filterArr.some((i) => i.price === 0)) return productsData;
            else
              keep = filterArr.some(
                (item) => item.price >= parseInt(product.price)
              );
          }

          return keep;
        });
        return newProduct;
      }
    case "filterOnPrice":
      const allProducts = [...state];

      console.log(allProducts, action.event);
      const filteredProduct = productsData.filter(
        (i) => i.price <= parseInt(action.event)
      );
      console.log(filteredProduct);
      return filteredProduct;

    case "sort": {
      const sortBy =
        action.event === "cheap" ? "cheap" : action.event.target.value;
      const allProducts = [...state];
      if (sortBy === "cheap") {
        const sortedProducts = allProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        return sortedProducts;
      } else if (sortBy === "expensive") {
        const sortedProducts = allProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        return sortedProducts;
      }
      return allProducts;
    }

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
